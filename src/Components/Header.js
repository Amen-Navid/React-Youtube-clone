import React, { useState } from "react";
import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { ImYoutube2, ImMic } from "react-icons/im";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

const Header = ({ toggleSidebar, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    onSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="header">
      <div className="left-header" style={{ display: "flex" }}>
        <CiMenuBurger
          className="hamburger"
          style={{ width: "100", height: "30", marginTop: "0.6rem" }}
          onClick={toggleSidebar}
        />
        <Link to="/">
          <ImYoutube2
            style={{
              width: "100",
              height: "30",
              marginTop: "0.6rem",
              color: "black",
            }}
          />
        </Link>
      </div>
      <form
        className="middle-header"
        style={{ display: "flex" }}
        name="search"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-bar"
        />
        <CiSearch className="CiSearch" onClick={handleSearch} type="submit" />
        <ImMic className="ImMic" />
      </form>
      <div
        className="right-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.7rem 5rem",
        }}
      >
        <HiOutlineDotsVertical style={{ width: "100", height: "30" }} />

        <button className="signin">
          <CiUser style={{ width: "80", height: "25", marginRight: "1rem" }} />{" "}
          <span style={{ width: "100px", margin: ".5rem" }}>Sign in</span>
        </button>
      </div>
    </div>
  );
};
export default Header;
