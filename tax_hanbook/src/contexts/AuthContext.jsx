import { createContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext(null);

const API_BASE = import.meta.env.VITE_API_AUTH_URL || 'http://localhost:8080/api/auth';

export const AuthProvider = ({ children }) => {
  const [user, setUser]     = useState(null);   // { email, role, firstName, lastName, token }
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('rra_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('rra_user');
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password, requestedRole) => {
    let res;
    try {
      res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, requestedRole }),
      });
    } catch {
      throw new Error('Cannot reach backend. Start backend on port 8080 and try again.');
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Login failed');
    const userData = {
      email:     data.email,
      role:      data.role,
      firstName: data.firstName,
      lastName:  data.lastName,
      token:     data.token,
    };
    setUser(userData);
    localStorage.setItem('rra_user', JSON.stringify(userData));
    return userData;
  }, []);

  const register = useCallback(async (firstName, lastName, email, password) => {
    let res;
    try {
      res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
    } catch {
      throw new Error('Cannot reach backend. Start backend on port 8080 and try again.');
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Registration failed');
    const userData = {
      email:     data.email,
      role:      data.role,
      firstName: data.firstName,
      lastName:  data.lastName,
      token:     data.token,
    };
    setUser(userData);
    localStorage.setItem('rra_user', JSON.stringify(userData));
    return userData;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('rra_user');
  }, []);

  const isAdmin    = useCallback(() => user?.role === 'ADMIN', [user]);
  const isTaxpayer = useCallback(() => user?.role === 'TAXPAYER', [user]);
  const isLoggedIn = useCallback(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAdmin, isTaxpayer, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
