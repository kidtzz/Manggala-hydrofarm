import React from "react";

const Footer = () => {
    return (
        <section className="py-5 pb-0 footer bg-grey">
            <div className="container-fluid px-5 my-5 ">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h6 className=" mb-4 font-weight-bold">About us</h6>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam voluptatibus fugit sit temporibus
                            saepe asperiores deserunt dolorem harum amet
                            praesentium veritatis, itaque ratione, dolor illum
                            pariatur iusto ipsam. Sequi, quia!
                        </p>
                    </div>
                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <h6 className=" mb-4 font-weight-bold">Contact</h6>
                        <div className="footer-link d-block text-secondary ">
                            <p>
                                {" "}
                                <i class="fab fa-whatsapp "> </i> +62 8222 9617
                                7554
                            </p>
                            <p>
                                {" "}
                                <i class="fas fa-envelope "> </i>{" "}
                                ManggalaHydrofarm@gmail.com
                            </p>
                            <p>
                                {" "}
                                <i class="fas fa-map-marker-alt"> </i> Manggal
                                RT 17, RW 06, Simo, Simo, Boyolali, Jawa tengah,
                                Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h6 className="  mb-4 font-weight-bold">
                            Learn & Support
                        </h6>
                        <div className="text-secondary">
                            <li>lorem</li>
                            <li>lorem</li>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h6 className=" mb-4 font-weight-bold">Follow Us</h6>
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
