import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimoni.scss";
import { ListTestimoni } from "./ListTestimoni";

const Testimoni = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className="container ">
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {ListTestimoni.map((isi, index) => {
                    return (
                        <div className="card px-0 m-2 p-3 " key={index}>
                            <img
                                src={isi.img}
                                className=" w-100 img-fluid"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    {isi.title}
                                </h5>
                                <p className="card-text">{isi.CardText}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Testimoni;
