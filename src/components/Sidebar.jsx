import { Link } from 'react-router-dom';
import { clearToken, getToken } from '../utils';

export const Sidebar = () => {
  const token = getToken()

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link collapsed">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
        {/* Add more links as needed */}
        <li className="nav-item">
          <Link to="/faq" className="nav-link collapsed">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link collapsed">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link collapsed">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </Link>
        </li>
        <li className="nav-item">
          {token ?
            <Link to="#" className="nav-link collapsed">
              <i className="bi bi-box-arrow-in-right"></i>
              <span onClick={() => clearToken()}>Logout</span>
            </Link>
            :
            <Link to="/login" className="nav-link collapsed">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          }
        </li>
        <li className="nav-item">
          <Link to="/error404" className="nav-link collapsed">
            <i className="bi bi-dash-circle"></i>
            <span>Error 404</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blank" className="nav-link collapsed">
            <i className="bi bi-file-earmark"></i>
            <span>Blank</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
