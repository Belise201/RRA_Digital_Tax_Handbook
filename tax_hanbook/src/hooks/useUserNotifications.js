import { useState, useEffect, useCallback } from 'react';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const STORAGE_KEY = 'rra_read_notif_ids';

const getReadIds = () => {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
};
const saveReadIds = (ids) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
};

/**
 * Polls for active content-update notifications.
 * Only call this for logged-in taxpayers (pass enabled=false for admins / guests).
 */
export const useUserNotifications = (enabled) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount]     = useState(0);

  const refresh = useCallback(async () => {
    if (!enabled) return;
    try {
      const r = await fetch(`${API}/api/notifications/all-active`);
      if (!r.ok) {
        console.warn('[Notifications] fetch failed:', r.status, r.statusText);
        return;
      }
      const all = await r.json();
      // Show ALL active notifications (global + page-specific), newest first
      const sorted = [...all].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setNotifications(sorted);
      const readIds = getReadIds();
      setUnreadCount(sorted.filter(n => !readIds.has(n.id)).length);
    } catch (err) {
      console.warn('[Notifications] network error:', err.message);
    }
  }, [enabled]);

  useEffect(() => {
    refresh();
    if (!enabled) return;
    const t = setInterval(refresh, 30000); // re-check every 30 s
    return () => clearInterval(t);
  }, [refresh, enabled]);

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
