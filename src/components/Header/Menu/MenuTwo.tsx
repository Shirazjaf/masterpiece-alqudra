"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuTwo = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 400);
      // setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header-menu style-one bg-[#1D2027] ${
          fixedHeader ? "fixed" : ""
        }`}>
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo.png"}
              width={1800}
              height={1600}
              alt="logo"
              priority={true}
              className="w-[149px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block text-white h-full">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/" || pathname.includes("/homepages/")
                    ? "active"
                    : ""
                }`}>
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/">
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("#") ? "active" : ""
                }`}>
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#">
                  <span>About</span>
                </Link>
                
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/service") ? "active" : ""
                }`}>
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#">
                  <span>Services</span>
                  
                </Link>
                
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/service") ? "active" : ""
                }`}>
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#">
                  <span>Products</span>
                  
                </Link>
                
              </li>
              
             
              
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/contact/") ? "active" : ""
                }`}>
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#">
                  <span>Contact</span>
                  
                </Link>
                
              </li>
            </ul>
          </div>
          <div className="menu-right-block max-sm:hidden">
            <div className="list-social style-two flex items-center gap-2.5 style-one">
              <Link
                className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center"
                href="https://www.facebook.com/"
                target="_blank">
                <i className="icon-facebook text-sm"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center"
                href="https://www.linkedin.com/"
                target="_blank">
                <i className="icon-in text-xs"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center"
                href="https://www.twitter.com/"
                target="_blank">
                <i className="icon-twitter text-[10px]"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center"
                href="https://www.instagram.com/"
                target="_blank">
                <i className="icon-insta text-[10px]"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center"
                href="https://www.youtube.com/"
                target="_blank">
                <i className="icon-youtube text-[10px]"></i>
              </Link>
            </div>
          </div>
          <div
            className="menu-humburger lg:hidden pointer"
            onClick={() => setOpenMenuMobile(!openMenuMobile)}>
            <Icon.List className="text-2xl" weight="bold" />
          </div>
        </div>
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}>
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!">
                    <span className="body2 font-semibold">Home </span>
                  </a>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${
                    openSubNavMobile === 2 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(2)}>
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!">
                    <span className="body2 font-semibold">About </span>
                  </a>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${
                    openSubNavMobile === 3 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(3)}>
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!">
                    <span className="body2 font-semibold">Services </span>
                    
                  </a>
                  
                </li>
                
                
                
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer contact ${
                    openSubNavMobile === 7 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(7)}>
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!">
                    <span className="body2 font-semibold">Contact </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuTwo;
