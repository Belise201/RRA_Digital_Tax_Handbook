/**
 * Backend origin without trailing slash (e.g. http://localhost:8080).
 * VITE_API_ROOT_URL is the canonical name; VITE_API_BASE_URL is a legacy alias.
 */
export function getApiRoot() {
  const raw =
    import.meta.env.VITE_API_ROOT_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    'http://localhost:8080';
  return String(raw).trim().replace(/\/+$/, '');
}
