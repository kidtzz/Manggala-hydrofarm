import React from "react";
import logo from "../img/logo.png";
import Button from "../component/button/button";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container">
                <a class="navbar-brand" href="  ">
                    <img
                        className="img-fluid "
                        width="100"
                        height="24"
                        src={logo}
                        alt=""
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                <div
                    class="collapse navbar-collapse justify-content-end text-center"
                    id="navbarNav"
                >
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="  ">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="  ">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="  ">
                                Services
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="  ">
                                Product
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="  ">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item fw-bold">
                            <a class="" href=" ">
                                <Button />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
