import React from "react";

const NavTabs = props => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a
                onClick={() => props.handlePageChange("About")}
                className={
                    props.currentPage === "About" ? "nav-link active" : "nav-link"
                }
            >
                About
      </a>
        </li>
        <li className="nav-item">
            <a
                onClick={() => props.handlePageChange("Discover")}
                className={
                    props.currentPage === "Discover" ? "nav-link active" : "nav-link"
                }
            >
                Discover
      </a>
        </li>
        <li className="nav-item">
            <a
                onClick={() => props.handlePageChange("Search")}
                className={
                    props.currentPage === "Search" ? "nav-link active" : "nav-link"
                }
            >
                Search
      </a>
        </li>
    </ul>
);

export default NavTabs;