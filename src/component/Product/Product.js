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
                    <div className="section-product-title d-flex justify-content-between mb-3">
                        <h5 className="fw-bold text-left ">Popular Nowadays</h5>
                        <div className="section-category d-flex">
                            <h6 className=" px-2 ">All </h6>
                            <h6 className=" text-muted px-2 ">Selada </h6>
                            <h6 className=" text-muted px-2 ">Parkcoy </h6>
                            <h6 className=" text-muted px-2 ">Melon </h6>
                        </div>
                    </div>
                    <div className=" justify-content-center">
                        <div className="row">
                            {ListProduct.map((item, index) => {
                                return (
                                    <div
                                        className=" text-black col-lg-4 col-md-4 lg-xl-4 col-lg-0 m-auto "
                                        key={index}
                                    >
                                        <div className="card mb-4 ">
                                            <i className="fa-lg pt-3 px-3 ">
                                                <img
                                                    className="img-fluid "
                                                    width={60}
                                                    height={50}
                                                    src={logo}
                                                    alt="logo-product"
                                                    data-aos="fade-up"
                                                    data-aos-duration="2000"
                                                />
                                            </i>
                                            <div className="product-img justify-content-center row ">
                                                <img
                                                    src={item.img}
                                                    className="img-fluid center-block px-5 my-2"
                                                    alt="product"
                                                    data-aos="flip-right"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h5 className="card-title mb-4">
                                                        {item.title}
                                                    </h5>
                                                </div>
                                                <hr></hr>
                                                <div>
                                                    <div className="d-flex justify-content-between ">
                                                        <span className="mx-3">
                                                            Harga
                                                        </span>
                                                        <span>
                                                            {item.harga}
                                                        </span>
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
        </div>
    );
};

export default Product;
