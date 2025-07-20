import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import { useCart } from "../Cartpage/Cartcontext";

function Navbar() {
  const navigate = useNavigate();
  const { setSearchTerm } = useContext(SearchContext);
  const { cartItems } = useCart();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    setIsCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍀 𝔾𝕣𝕠𝕔𝕖𝕣𝕪 ℙ𝕠𝕚𝕟𝕥
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => setIsCollapsed(true)}
              >
                ʜᴏᴍᴇ
              </Link>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                ᴄᴀᴛᴇɢᴏʀʏ
              </span>
              <ul className="dropdown-menu">
                {["vegetable", "fruits", "grocery", "oil", "Dairy"].map(
                  (cat) => (
                    <li key={cat}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleCategoryClick(cat)}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/offer"
                onClick={() => setIsCollapsed(true)}
              >
                ᴏꜰꜰᴇʀ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/shop"
                onClick={() => setIsCollapsed(true)}
              >
                ꜱʜᴏᴘ
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/cart"
                onClick={() => setIsCollapsed(true)}
              >
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ fontSize: "20px" }}
                ></i>
                <span className="badge bg-warning text-dark ms-1">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>

          <form
            className="d-flex ms-lg-3 mt-3 mt-lg-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
