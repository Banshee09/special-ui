import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to={"/"}>Special Offers</Link>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/categories"} >Categories</Link></li>
                        <li><Link to={"/stores"}>Stores</Link></li>
                        <li><Link to={"/about"}>About Me</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;