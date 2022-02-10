import React, { useEffect } from "react";
import { button2 } from "../Button/Button";
import pp from "../../img/pp.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContentTB.scss";

const ContentTB = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        AOS.refresh();
    }, []);
    return (
        <section className="py-5 content-TB mt-4">
            <div className="container-fluid px-5 my-5 justify-content-center align-items-center">
                <div className="row ">
                    <div className="col-lg-5 mb-5 mb-lg-0 col-md-5 col-xl-5 mx-auto">
                        <div className=" d-block">
                            <div className="info-bg">
                                <h5>infomative</h5>
                            </div>
                            <p
                                className="display-6 "
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-center"
                            >
                                Modern Agriculture Lorem Ipsum Dolor Sit amet
                                consectetur
                            </p>
                            <p data-aos="flip-right">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Lorem ipsum dolor
                            </p>
                            <div className="row button ">
                                <div
                                    className="p-2 col-lg-6 mx-auto"
                                    data-aos="fade-up-right"
                                >
                                    {button2()}
                                </div>
                                <div
                                    className="p-2 pt-3 col-lg-6 px-2 mx-auto"
                                    data-aos="fade-up-right"
                                >
                                    <a href=" " className="readme">
                                      
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-7 mb-5 mb-lg-0 col-md-7 col-xl-7  image"
                        data-aos="zoom-in-up"
                    >
                        <img className=" img-fluid" src={pp} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentTB;
