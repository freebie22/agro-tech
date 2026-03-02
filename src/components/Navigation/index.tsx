"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Navigation = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const sidebarBackdropRef = useRef<HTMLDivElement | null>(null);
  const toggleSidebarBtnRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeMobileSidebar = () => {
    sidebarRef.current?.classList.remove("open");
    sidebarBackdropRef.current?.classList.remove("show");
  };

  useEffect(() => {
    toggleSidebarBtnRef.current?.addEventListener("click", () => {
      sidebarRef.current?.classList.toggle("collapsed");
    });

    mobileMenuBtnRef.current?.addEventListener("click", () => {
      sidebarRef.current?.classList.add("open");
      sidebarBackdropRef.current?.classList.add("show");
    });

    sidebarBackdropRef.current?.addEventListener("click", closeMobileSidebar);
  }, [sidebarRef, toggleSidebarBtnRef]);

  return (
    <>
      <Sidebar
        sidebarRef={sidebarRef}
        toggleSidebarBtnRef={toggleSidebarBtnRef}
        sidebarBackdropRef={sidebarBackdropRef}
      />
      <Navbar mobileMenuBtnRef={mobileMenuBtnRef} />
    </>
  );
};

export default Navigation;
