import React from "react";
import imgP from "../../img/product/product1.png";
import "./Product.scss";

const Product = () => {
    return (
        <div className="container my-5 mb-5 justify-content-center">
            <div className="section-tittle">
                <h2 className="fw-bold text-center ">Our Product</h2>
                <span className="section-separator"></span>
            </div>
            <div className="row d-flex align-items-center">
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
            </div>
        </div>
    );
};

export default Product;
