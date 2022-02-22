import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <section className="py-5 pb-0 footer bg-grey">
            <div className="container-fluid px-5 my-5 ">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-xl-4 mb-5 mb-lg-0">
                        <h6 className=" mb-4 fw-bold">About us</h6>
                        <p className="text-secondary">
                            <a href=" ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam voluptatibus fugit sit
                                temporibus saepe asperiores deserunt dolorem
                                harum amet praesentium veritatis, itaque
                                ratione, dolor illum pariatur iusto ipsam.
                                Sequi, quia!
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xl-3  mb-5 mb-lg-0">
                        <h6 className=" mb-4 fw-bold">Contact</h6>
                        <div className="footer-link d-block text-secondary d-flex ">
                            <ul className="text-center ">
                                <li>
                                    {" "}
                                    <i class="fab fa-whatsapp "> </i>
                                </li>
                                <li>
                                    {" "}
                                    <i class="fas fa-envelope "> </i>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt"> </i>
                                </li>
                            </ul>
                            <ul className="">
                                <li>
                                    <a href=" "> +62 8222 9617 7554 </a>
                                </li>
                                <li>
                                    <a href=" ">ManggalaHydrofarm@gmail.com</a>
                                </li>
                                <li>
                                    <a href=" ">
                                        {"   "}
                                        Manggal RT 17, RW 06, Simo, Simo,
                                        Boyolali, Jawa tengah, Indonesia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2  mb-5 mb-lg-0">
                        <h6 className="  mb-4 fw-bold">Learn & Support</h6>
                        <div className="text-secondary">
                            <ul>
                                <li>
                                    <a href=" ">Lorem</a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href=" ">Lorem </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2  mb-5 mb-lg-0">
                        <h6 className=" mb-4 fw-bold">Follow Us</h6>
                        <a
                            class="btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                            class="btn btn-instagram btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a
                            class="btn btn-web btn-floating text-white m-1"
                            href="#!"
                            role="button"
                        >
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                </div>
            </div>
            <div class="text-center pb-0 copyright text-secondary ">
                © 2022 Manggala Hydrofarm. All rights reserved
                <div className="border-footer "></div>
            </div>
        </section>
    );
};

export default Footer;
