import React from "react";
import "./Testimoni.scss";
import { ListTestimoni } from "./ListTestimoni";

const Testimonial = () => {
    return (
        <section className="Testimonial mt-5 container-fluid  ">
            <div classNameName="container">
                <div
                    className="section-title text-center"
                    data-aos="zoom-in-up"
                >
                    <h2 className="fw-bold">Testimonials</h2>
                    <span className="section-separator"></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>
            </div>
            <div className="testimonials-carousel-wrap ">
                <div className="listing-carousel-button listing-carousel-button-next">
                    <i className="fa fa-caret-right"></i>
                </div>
                <div className="listing-carousel-button listing-carousel-button-prev">
                    <i className="fa fa-caret-left"></i>
                </div>
                <div
                    className="testimonials-carousel  justify-content-center align-items-center"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="swiper-container  pt-3 ">
                        <div className="swiper-wrapper ">
                            {ListTestimoni.map((isi, index) => {
                                return (
                                    <div className="swiper-slide mb-1 ">
                                        <div
                                            className="testi-item   "
                                            key={index}
                                        >
                                            <div className="testi-avatar">
                                                <img alt="" src={isi.img}></img>
                                            </div>
                                            <div className="testimonials-text-before">
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                            <div className="testimonials-text">
                                                <div className="listing-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <p>{isi.text}</p>
                                                <a
                                                    href=" "
                                                    className="text-link"
                                                >
                                                    {" "}
                                                </a>
                                                <div className="testimonials-avatar">
                                                    <h3>{isi.name}</h3>
                                                    <h4>{isi.who}</h4>
                                                </div>
                                            </div>
                                            <div className="testimonials-text-after">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="tc-pagination mb-5"></div>
            </div>
        </section>
    );
};

export default Testimonial;
