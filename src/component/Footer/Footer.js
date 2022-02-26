import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <section className="py-2 footer bg-grey">
            <div className="container px-5 my-5 ">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-3 col-md-3 col-xl-3  mb-5 mb-lg-0">
                        <h5 className=" mb-3 px-2">Contact</h5>
                        <div className="footer-link text-secondary ">
                            <ul className="text-center ">
                                <li>
                                    <i class="fab fa-whatsapp "> </i>
                                </li>
                                <li>
                                    <i class="fas fa-envelope "> </i>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt"> </i>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href=" "> +62 8222 9617 7554 </a>
                                </li>
                                <li>
                                    <a href=" ">ManggalaHydrofarm@gmail.com</a>
                                </li>
                                <li>
                                    <a href=" ">
                                        Manggal RT 17, RW 06, Simo, Boyolali,
                                        Jawa tengah, Indonesia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xl-3 mb-5 mb-lg-0">
                        <h5 className=" mb-3 ">About us</h5>
                        {/* <p className="text-secondary">
                            <li>
                                <a href=" ">Our Values</a>
                            </li>
                            <li>
                                <a href=" "> Contact Us</a>
                            </li>
                            <li>
                                <a href=" ">News</a>
                            </li>
                            <li>
                                <a href=" ">References</a>
                            </li>
                        </p> */}
                        <ul>
                            <li>
                                <a href=" ">Conditions of Use</a>
                            </li>
                            <li>
                                <a href=" ">Privacy Notice</a>
                            </li>
                            <li>
                                <a href=" ">About Cookies</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xl-3  mb-5 mb-lg-0">
                        <h5 className="  mb-3 px-2 ">Learn & Support</h5>
                        <div className="text-secondary">
                            <ul>
                                <li>
                                    <a href=" ">Conditions of Use</a>
                                </li>
                                <li>
                                    <a href=" ">Privacy Notice</a>
                                </li>
                                <li>
                                    <a href=" ">About Cookies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xl-3  mb-5 mb-lg-0">
                        <h5 className=" mb-3 px-2">Follow Us</h5>

                        <div class="btn" href="#!" role="button">
                            <a href=" ">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div class="btn  " href="#!" role="button">
                            <a href=" ">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="btn " href="#!" role="button">
                            <a href=" ">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                </div>
            </div>
            <div class="container text-center copyright text-secondary  ">
                <hr /> <br /> © 2022 Manggala Hydrofarm. All rights reserved
            </div>
        </section>
    );
};

export default Footer;
