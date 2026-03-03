/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/" && "active"}`,
              )}
              href="/"
              data-page="dashboard"
            >
              <i className="fas fa-tachometer-alt me-2"></i>
              <span className="link-text">Головна</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/crops" && "active"}`,
              )}
              href="/crops"
              data-page="crops"
            >
              <i className="fas fa-seedling me-2"></i>
              <span className="link-text">Посіви</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/farmers" && "active"}`,
              )}
              href="/farmers"
              data-page="farmers"
            >
              <i className="fas fa-users me-2"></i>
              <span className="link-text">Фермери</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/sensors" && "active"}`,
              )}
              href="/sensors"
              data-page="sensors"
            >
              <i className="fas fa-cog me-2"></i>
              <span className="link-text">Показники датчиків</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/reports" && "active"}`,
              )}
              href="/reports"
              data-page="reports"
            >
              <i className="fas fa-chart-bar me-2"></i>
              <span className="link-text">Звіти</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={clsx(
                `nav-link d-flex align-items-center ${pathname === "/settings" && "active"}`,
              )}
              href="/settings"
              data-page="settings"
            >
              <i className="fas fa-cog me-2"></i>
              <span className="link-text">Налаштування</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
