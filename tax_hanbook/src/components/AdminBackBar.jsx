import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import './AdminBackBar.css';

const AdminBackBar = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Only visible when an admin is browsing handbook pages (not on /admin)
  if (!user || !isAdmin() || location.pathname.startsWith('/admin')) return null;

  return (
    <button
      className="admin-fab"
      onClick={() => navigate('/admin')}
      aria-label="Back to Admin Dashboard"
      title="Back to Admin Dashboard"
    >
      <span className="admin-fab__icon">
        <LayoutDashboard size={18} />
      </span>
      <span className="admin-fab__label">Dashboard</span>
    </button>
  );
};

export default AdminBackBar;
