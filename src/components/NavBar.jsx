// import { useState } from "react";
import Search from "./Search";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <h3 className="navbar-brand">News</h3>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* <NavItem name="Home" class="active" /> */}
                        <NavItem name="Business" />
                        <NavItem name="Sports" />
                        <NavItem name="Technology" />
                        <NavItem name="Food" />
                        <NavItem name="Science" />
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <Search />
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavBar;
