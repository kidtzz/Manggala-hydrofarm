import React from "react";
import { button2 } from "../component/button/button";

const ContentTB = () => {
    return (
        <section className="py-5 content-TB ">
            <div className="container-fluid px-5 my-5 justify-content-center">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0 border ">
                        <div className=" d-block">
                            <div className="info-bg">
                                <h5>infomative</h5>
                            </div>
                            <p className="display-6">
                                Lorem Ipsum Dolor Sit amet consectetur
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Lorem ipsum dolor
                            </p>
                            <div className="row button ">
                                <div className="p-2 col-lg-6">{button2()}</div>
                                <a
                                    href=" "
                                    className="p-2 pt-3 col-lg-6 align-items-center"
                                >
                                    Read Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7  mb-5 mb-lg-0 border">
                        <h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Laborum
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentTB;
