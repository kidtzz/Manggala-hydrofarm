import React from "react";
import "./Product.scss";
import { ListProduct } from "./ListProduct";
import logo from "../../img/logo.png";
import { button4 } from "../Button/Button";

const Product = () => {
    return (
        <div className="Product container my-5 mb-5 justify-content-center">
            <div className="section-tittle">
                <h2 className="fw-bold text-center ">Our Product</h2>
                <span className="section-separator"></span>
            </div>
            <section>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="row">
                            {ListProduct.map((item, index) => {
                                return (
                                    <div
                                        className=" text-black col-lg-4 col-md-4 lg-xl-4 col-lg-0 m-auto "
                                        key={index}
                                    >
                                        <div className="card mb-4">
                                            <i className="fa-lg pt-3 pb-1 px-3">
                                                <img
                                                    className="img-fluid "
                                                    width={60}
                                                    height={50}
                                                    src={logo}
                                                    alt="logo-product"
                                                />
                                            </i>
                                            <img
                                                src={item.img}
                                                className="card-img-top img-fluid"
                                                alt="product"
                                            />
                                            <div className="card-body ">
                                                <div className="text-center">
                                                    <h5 className="card-title mb-4">
                                                        {item.title}
                                                    </h5>
                                                </div>
                                                <hr></hr>
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <span>
                                                            Pro Display XDR
                                                        </span>
                                                        <span>{item.gram}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between total font-weight-bold mt-2">
                                                    {button4()}
                                                    <span>{item.gram}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="row d-flex align-items-center">
                <div className="col-lg-5 col-md-5 lg-xl-5 col-lg-0 m-auto">
                    <img
                        src={imgP}
                        alt=""
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    ></img>
                </div>
                <div
                    className=" col-lg-5 col-md-5 lg-xl-5 col-lg-0 m-auto"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1100"
                >
                    <div className="container">
                        <h5 className="fw-bold">Selada Bohemia</h5>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quasi ipsam distinctio corrupti cumque nobis
                            doloremque natus veritatis consequatur, sit, ut
                            incidunt quos quibusdam. Eos mollitia, ipsum veniam
                            explicabo iure vero?
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Product;
