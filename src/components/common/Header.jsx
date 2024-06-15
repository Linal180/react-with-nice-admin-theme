

export const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Test App</span>
        </a>
        {/* Sidebar Toggle Button */}
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>


      {/* Navigation Icons */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          {/* Search Icon (visible on small screens) */}
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
