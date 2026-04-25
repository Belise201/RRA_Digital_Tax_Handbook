import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const API_ROOT = import.meta.env.VITE_API_ROOT_URL || 'http://localhost:8080';

const track = async (payload) => {
  try {
    await fetch(`${API_ROOT}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch { /* ignore analytics errors */ }
};

const AnalyticsTracker = () => {
  const location = useLocation();
  const { user } = useAuth();
  const prevPathRef = useRef('');
  const sessionRef = useRef(
    localStorage.getItem('analytics_session_id') || crypto.randomUUID()
  );

  useEffect(() => {
    localStorage.setItem('analytics_session_id', sessionRef.current);
  }, []);

  // Track page views
  useEffect(() => {
    // Skip admin pages
    if (location.pathname.startsWith('/admin')) return;

    track({
      eventType: 'PAGE_VIEW',
      sessionId: sessionRef.current,
      pagePath: location.pathname,
      referrerPath: prevPathRef.current || null,
      userEmail: user?.email || null,
    });
    prevPathRef.current = location.pathname;
  }, [location.pathname, user?.email]);

  // Track searches via URL query param
  useEffect(() => {
    if (location.pathname !== '/search') return;
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (!q) return;

    track({
      eventType: 'SEARCH',
      sessionId: sessionRef.current,
      pagePath: '/search',
      searchQuery: q,
      userEmail: user?.email || null,
    });
  }, [location.search, user?.email]);

  return null;
};

export default AnalyticsTracker;
