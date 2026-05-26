import { useState, useEffect, useCallback } from 'react';

const API = import.meta.env.VITE_API_ROOT_URL || import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const STORAGE_KEY = 'rra_read_notif_ids';

const getReadIds = () => {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
};
const saveReadIds = (ids) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
};

/**
 * Polls inbox notifications for logged-in taxpayers (Bearer JWT).
 * Includes handbook broadcasts plus any row targeted to this user's email.
 */
export const useUserNotifications = (enabled, token) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount]     = useState(0);

  const refresh = useCallback(async () => {
    if (!enabled || !token) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }
    try {
      const r = await fetch(`${API}/api/notifications/inbox`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!r.ok) {
        console.warn('[Notifications] inbox fetch failed:', r.status, r.statusText);
        return;
      }
      const all = await r.json();
      const sorted = [...all].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setNotifications(sorted);
      const readIds = getReadIds();
      setUnreadCount(sorted.filter(n => !readIds.has(n.id)).length);
    } catch (err) {
      console.warn('[Notifications] network error:', err.message);
    }
  }, [enabled, token]);

  useEffect(() => {
    refresh();
    if (!enabled || !token) return;
    const t = setInterval(refresh, 30000);
    return () => clearInterval(t);
  }, [refresh, enabled, token]);

  const markRead = useCallback((id) => {
    const ids = getReadIds();
    ids.add(id);
    saveReadIds(ids);
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, []);

  const markAllRead = useCallback(() => {
    saveReadIds(new Set(notifications.map(n => n.id)));
    setUnreadCount(0);
  }, [notifications]);

  return { notifications, unreadCount, refresh, markRead, markAllRead };
};
