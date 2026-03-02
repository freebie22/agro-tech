/* eslint-disable @next/next/no-img-element */
"use client";

type Props = {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  sidebarBackdropRef: React.RefObject<HTMLDivElement | null>;
  toggleSidebarBtnRef: React.RefObject<HTMLButtonElement | null>;
};

const Sidebar = ({
  sidebarRef,
  sidebarBackdropRef,
  toggleSidebarBtnRef,
}: Props) => {
  return (
    <>
      <div
        ref={sidebarBackdropRef}
        className="sidebar-backdrop"
        id="sidebarBackdrop"
      ></div>

      <div ref={sidebarRef} className="sidebar" id="sidebar">
        <div className="sidebar-header d-flex align-items-center justify-content-between p-3">
          <h3 className="mb-0 fs-6 text-white pb-1">Agro Tech</h3>
          <button
            className="btn btn-light btn-sm toggle-btn"
            id="toggleSidebar"
            ref={toggleSidebarBtnRef}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="user-profile p-3 text-center border-bottom border-secondary border-opacity-25">
          <img
            src="/images/myAvatar.avif"
            className="rounded-circle mb-2"
            alt="User Avatar"
          />
          <div className="user-info">
            <h6 className="mb-1 text-white">Іван Семенюк</h6>
            <small className="text-light">Завідуючий фермою</small>
          </div>
        </div>

        <ul className="nav flex-column p-3 flex-grow-1">
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center active"
              href="#"
              data-page="dashboard"
            >
              <i className="fas fa-tachometer-alt me-2"></i>
              <span className="link-text">Головна</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center"
              href="#"
              data-page="crops"
            >
              <i className="fas fa-seedling me-2"></i>
              <span className="link-text">Посіви</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center"
              href="#"
              data-page="farmers"
            >
              <i className="fas fa-users me-2"></i>
              <span className="link-text">Фермери</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center"
              href="#"
              data-page="reports"
            >
              <i className="fas fa-chart-bar me-2"></i>
              <span className="link-text">Звіти</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center"
              href="#"
              data-page="settings"
            >
              <i className="fas fa-cog me-2"></i>
              <span className="link-text">Налаштування</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
