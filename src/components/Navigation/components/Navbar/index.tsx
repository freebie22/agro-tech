"use client";

type Props = {
  mobileMenuBtnRef: React.RefObject<HTMLButtonElement | null>;
  navbarRef: React.RefObject<HTMLDivElement | null>;
};

const Navbar = ({ mobileMenuBtnRef, navbarRef }: Props) => {
  return (
    <nav
      className="navbar navbar-light bg-white shadow-sm"
      style={{ padding: "0.5rem 1rem" }}
    >
      <div
        ref={navbarRef}
        className="container-fluid d-flex align-items-center justify-content-between navbar-container expanded"
      >
        <div className="d-flex align-items-center">
          <button
            ref={mobileMenuBtnRef}
            className="btn btn-light btn-sm mobile-menu-btn me-2"
            id="mobileMenuBtn"
          >
            <i className="fas fa-bars"></i>
          </button>
          <h4 className="mb-0 text-success" id="pageTitle">
            Dashboard
          </h4>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown me-2">
            <button
              className="btn btn-light position-relative"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3<span className="visually-hidden">notifications</span>
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              style={{ minWidth: "260px" }}
            >
              <li>
                <h6 className="dropdown-header">Notifications</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wheat harvest due in 2 days
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  New farmer registration
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Irrigation system alert
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-success btn-sm" id="logoutBtn">
            <i className="fas fa-sign-out-alt me-1"></i>
            <span className="logout-btn-text">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
