import { useState, useEffect, useCallback } from 'react';
import { getApiRoot } from '../config/api';

const API = getApiRoot();

/**
 * FETCH TIMEOUT — the backend must respond within 2 seconds or we give up.
 * This guarantees the page is always visible within 2 s even if the backend
 * is slow or completely unreachable.
 */
const FETCH_TIMEOUT_MS = 2000;

/**
 * Fetches the admin content-override record for a given page path.
 *
 * Key behaviour:
 *   • loading starts as FALSE — the static React page renders IMMEDIATELY.
 *   • The fetch runs silently in the background and updates data if needed.
 *   • A 2-second AbortController timeout ensures the page never blocks.
 *
 * Returns:
 *   data    – PageContentDTO | null   (null = no override exists)
 *   loading – boolean (always false on initial render; true only during refetch)
 *   refetch – function to manually refresh
 *
 * Backend rules:
 *   data.active === true  → override exists and is live (show override content)
 *   data.active === false → page was hidden by admin
 *   data === null         → no DB record; page renders its default static content
 *
 * @param {{ skip?: boolean }} [options] — if true, skip the API call entirely.
 */
export const usePageContent = (pagePath, options = {}) => {
  const { skip = false } = options;

  // Start with loading = false so the page renders instantly without waiting
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async () => {
    if (!pagePath || skip) {
      setData(null);
      setLoading(false);
      return;
    }

    // Only show a loading spinner when the admin explicitly triggers a refetch,
    // not on the initial background fetch (so the page stays visible).
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const r = await fetch(
        `${API}/api/content/page?path=${encodeURIComponent(pagePath)}`,
        { signal: controller.signal }
      );
      if (r.ok) {
        setData(await r.json());
      } else {
        setData(null); // 404 = no override
      }
    } catch {
      // Timeout, network error, or backend offline — show the static page
      setData(null);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [pagePath, skip]);

  // Fire a silent background fetch on mount / path change — no loading state
  useEffect(() => {
    if (skip) {
      setData(null);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    fetch(
      `${API}/api/content/page?path=${encodeURIComponent(pagePath)}`,
      { signal: controller.signal }
    )
      .then(r => (r.ok ? r.json() : null))
      .then(json => setData(json))
      .catch(() => setData(null))
      .finally(() => clearTimeout(timeoutId));

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [pagePath, skip]);

  return { data, loading, refetch };
};
