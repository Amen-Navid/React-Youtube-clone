import React from "react";
import "./Style.css";
import { menuItems, footerItems, footerItems2 } from "../Slice/sidebarOptions";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const renderMenuItems = (items, shouldDisplay) =>
    shouldDisplay &&
    items.map((menuItem, index) => (
      <Link
        to={menuItem.path}
        key={index}
        className={`menu-item ${
          location.pathname === menuItem.path ? "active" : ""
        }`}
      >
        <span className="menu-icon">{menuItem.icon}</span>
        <span className="menu-text">{menuItem.text}</span>
      </Link>
    ));

  const renderFooters = (items, shouldDisplay) =>
    shouldDisplay && (
      <div
        className="footer-list"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {items.map((footer, index) => (
          <div key={index} className="footer-item">
            <span className="footer-text">{footer}</span>
          </div>
        ))}
      </div>
    );
  return (
    <div className={`sidebar ${!isOpen ? "open" : ""}`}>
      {renderMenuItems(menuItems.slice(0, 3), !isOpen)}
      {renderMenuItems(menuItems.slice(0, 3), isOpen)}
      {!isOpen && <hr />}
      {renderMenuItems(menuItems.slice(3, 5), !isOpen)}
      {renderMenuItems(menuItems.slice(3, 5), isOpen)}
      {!isOpen && <hr />}
      {!isOpen && <h3>Explore</h3>}
      {renderMenuItems(menuItems.slice(5, 10), !isOpen)}
      {!isOpen && <hr />}
      {renderMenuItems(menuItems.slice(10, 11), !isOpen)}
      {!isOpen && <hr />}
      {!isOpen && <h3>More from Youtube</h3>}
      {renderMenuItems(menuItems.slice(11, 14), !isOpen)}
      {!isOpen && <hr />}
      {renderMenuItems(menuItems.slice(14, 18), !isOpen)}
      {!isOpen && <hr />}
      {renderFooters(footerItems, !isOpen)}
      {!isOpen && <br />}
      {renderFooters(footerItems2, !isOpen)}
      {!isOpen && <h4>&copy;Navid {new Date().getFullYear()}</h4>}
    </div>
  );
};

export default Sidebar;
