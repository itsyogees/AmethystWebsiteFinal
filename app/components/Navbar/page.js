"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = (event) => {
    event.stopPropagation();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <header className={`navbarMain ${isSticky ? "sticky" : ""}`}>
      <div className="navbarContainer">
        {/* Left Section: Navigation Links */}
        <nav className="navLinks">
          <ul className="navList">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="dropdownToggle" onClick={toggleDropdown}>
                Shop
              </button>
              <ul className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
               
               
               
              </ul>
            </li> */}
            <li>
              <Link href="/pages/About">About Us</Link>
            </li>
            <li >
                  <Link href="/pages/ClothShop">Fashion</Link>
                </li>
            <li >
                  <Link href="/pages/JewelleryShop">Accessories </Link>
                </li>
            {/* <li>
              <Link href="/pages/Blog">Blog</Link>
            </li> */}
            <li>
              <Link href="/pages/Contact">Contact Us</Link>
            </li>
          </ul>
          <button className="menuToggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

  
        <h1 className="logo">Amethyst</h1>

       
        <div className="navIcons">
          <FaSearch className="icon" title="Search" />
          <Link href="/pages/Cart"><CiShoppingCart className="icon" title="Cart" /></Link>
          <Link href="/pages/UserProfile">
          <RiUser3Line className="icon" title="User" /></Link>
        </div>
      </div>

      
      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
      <div className={`sideMenu ${isMenuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <ul className="mobileNavList">
          <li onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          {/* <li onClick={toggleMobileDropdown} className="dropdown"   onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
            <span>Shop</span>
            <ul className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
               
              
              </ul>
          </li> */}
          {/* <li onClick={closeMenu}>
            <Link href="/pages/Products">Products</Link>
          </li> */}
           <li onClick={closeMenu}>
                  <Link href="/pages/About">About Us</Link>
                </li>
          <li onClick={closeMenu}>
                  <Link href="/pages/ClothShop">Fashion</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href="/pages/JewelleryShop">Accessories</Link>
                </li>
          {/* <li onClick={closeMenu}>
            <Link href="/pages/Blog">Blog</Link>
          </li> */}
          <li onClick={closeMenu}>
            <Link href="/pages/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
