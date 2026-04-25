import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Bell } from 'lucide-react';

const API = import.meta.env.VITE_API_ROOT_URL || 'http://localhost:8080';

const NotificationBanner = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [dismissed, setDismissed] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('dismissed_notifs') || '[]'); }
    catch { return []; }
  });

  const fetchNotifications = async () => {
    try {
      // Fetch global notifications
      const [globalRes, pageRes] = await Promise.all([
        fetch(`${API}/api/notifications/active`),
        fetch(`${API}/api/notifications/active?page=${encodeURIComponent(location.pathname)}`)
      ]);
      const global = globalRes.ok ? await globalRes.json() : [];
      const page   = pageRes.ok  ? await pageRes.json()   : [];
      const merged = [...global, ...page].filter(
        (n, i, arr) => arr.findIndex(x => x.id === n.id) === i
      );
      setNotifications(merged);
    } catch { /* ignore */ }
  };

  useEffect(() => {
    fetchNotifications();
    // Poll every 60 seconds for real-time updates
    const interval = setInterval(fetchNotifications, 60000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const dismiss = (id) => {
    const updated = [...dismissed, id];
    setDismissed(updated);
    sessionStorage.setItem('dismissed_notifs', JSON.stringify(updated));
  };

  const visible = notifications.filter(n => !dismissed.includes(n.id));
  if (!visible.length) return null;

  return (
    <div className="notif-banner-stack">
      {visible.map(n => (
        <div key={n.id} className="notif-banner">
          <Bell size={16} className="notif-banner-icon" />
          <div className="notif-banner-body">
            <strong>{n.title}</strong>
            <span>{n.message}</span>
          </div>
          <button className="notif-banner-close" onClick={() => dismiss(n.id)} aria-label="Dismiss">
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationBanner;
