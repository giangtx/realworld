import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  }

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <Link to="/" className="navbar-brand">conduit</Link>

        <div className="flex gap-4">
          <Link className="nav-link" to="/" data-active={isActive('/')}>Home</Link>
          <Link className="nav-link" to="/login" data-active={isActive('/login')}>Sign in</Link>
          <Link className="nav-link" to="/register" data-active={isActive('/login')}>Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;