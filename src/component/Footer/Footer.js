import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <section className="py-2 footer bg-grey">
            <div className="container my-5 ">
                <div className="row justify-content-center ">
                    <div className="col-lg-3 col-md-3 col-xl-3  mb-3 mb-lg-0 ">
                        <h5 className=" mb-2 px-2">Contact</h5>
                        <div className="footer-link text-secondary lh-lg">
                            <ul>
                                <li>
                                    <a href=" "> +62 889-8039-6377 </a>
                                </li>
                                <li>
                                    <a href=" ">ManggalaHydrofarm@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2 mb-3 mb-lg-0 ">
                        <h5 className=" mb-2 px-2">About us</h5>
                        <ul className="text-secondary lh-lg">
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
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2  mb-3 mb-lg-0 ">
                        <h5 className=" mb-2 px-2 ">Learn & Support</h5>
                        <div className="text-secondary lh-lg">
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
                    <div className="col-lg-2 col-md-2 col-xl-2  mb-3 mb-lg-0 ">
                        <h5 className=" mb-2 px-2">Follow Us</h5>

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
                        <div class="btn  " href="#!" role="button">
                            <a href=" ">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                </div>
            </div>
            <div class="container copyright text-secondary text-center justify-content-center">
                <hr />
                <div>
                    © 2022 Manggala Hydrofarm. All rights reserved <br />
                    Manggal RT 17, RW 06, Simo, Boyolali, Jawa tengah, Indonesia
                </div>
            </div>
        </section>
    );
};

export default Footer;
