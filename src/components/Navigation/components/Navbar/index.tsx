"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  mobileMenuBtnRef: React.RefObject<HTMLButtonElement | null>;
  navbarRef: React.RefObject<HTMLDivElement | null>;
};

const Navbar = ({ mobileMenuBtnRef, navbarRef }: Props) => {
  const [pageName, setPageName] = useState<string>("");
  const logoutRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  const handlePageName = (href: string): string => {
    let name = " ";

    switch (href) {
      case "/crops": {
        name = "Посіви";
        break;
      }
      case "/farmers": {
        name = "Працівники";
        break;
      }
      case "/reports": {
        name = "Звіти";
        break;
      }
      case "/settings": {
        name = "Налаштування";
        break;
      }
      case "/sensors": {
        name = "Показники сенсорів";
        break;
      }
      case "/tasks": {
        name = "Завдання";
        break;
      }
      case "/map": {
        name = "Карта полів";
        break;
      }
      default:
        name = "Головна";
        break;
    }
    return name;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPageName(handlePageName(pathname));
  }, [pathname]);

  useEffect(() => {
    logoutRef.current?.addEventListener("click", function () {
      if (confirm("Ви хочете вийти з облікового запису?"))
        alert("Вихід успішний!");
    });
  }, []);

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
            {pageName}
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
          <button
            ref={logoutRef}
            className="btn btn-outline-success btn-sm"
            id="logoutBtn"
          >
            <i className="fas fa-sign-out-alt me-1"></i>
            <span className="logout-btn-text">Вихід</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
