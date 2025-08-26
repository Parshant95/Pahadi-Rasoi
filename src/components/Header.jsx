import React from "react";
import logo from "../assets/Pahadi_rasoi.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Pahadi Rasoi"
          style={{ height: "50px", width: "auto", cursor: "pointer" }}
        />
      </div>

      {/* Navigation */}
      <div className="nav-item">
        <ul
          style={{
            display: "flex",
            gap: "25px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              style={{
                textDecoration: "none",
                color: "#333",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              style={{
                textDecoration: "none",
                color: "#333",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Contact Us
            </Link>
          </li>
          <li
            style={{
              cursor: "pointer",
              color: "#333",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
