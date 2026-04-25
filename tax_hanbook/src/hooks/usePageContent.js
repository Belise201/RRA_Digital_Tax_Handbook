import { useState, useEffect, useCallback } from 'react';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Fetches the admin content-override record for a given page path.
 *
 * Returns:
 *   data    – PageContentDTO | null   (null = no override exists)
 *   loading – boolean
 *   refetch – function to manually refresh
 *
 * Backend rules:
 *   data.active === true  → override exists and is live (show override content)
 *   data.active === false → page was hidden by admin
 *   data === null         → no DB record; page renders its default static content
 */
export const usePageContent = (pagePath) => {
  const [data, setData]       = useState(undefined); // undefined = not yet fetched
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(async () => {
    if (!pagePath) { setLoading(false); return; }
    setLoading(true);
    try {
      const r = await fetch(
        `${API}/api/content/page?path=${encodeURIComponent(pagePath)}`,
      );
      if (r.ok) {
        setData(await r.json());
      } else {
        setData(null); // 404 = no override
      }
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [pagePath]);

  useEffect(() => { refetch(); }, [refetch]);

  return { data, loading, refetch };
};
