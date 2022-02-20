import React from "react";
import "./ShopBrand.scss";
import img1 from "../../img/logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShopBrand = () => {
    const ListBrand = [
        {
            title: "Manggala hydrofarm",
            brandimg: [img1],
        },
        {
            title: "Manggala hydrofarm",
            brandimg: [img1],
        },
        {
            title: "Manggala hydrofarm",
            brandimg: [img1],
        },
    ];
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
        <div className="ShopBrand container-fluid p-5 text-center">
            <h2 className=" fw-bold">Shop Brand</h2>
            <span className="section-separator"></span>
            <div className="">
                <div className="brand-shop ">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
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
                        {ListBrand.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="img-fluid px-2 ">
                                        <img
                                            src={item.brandimg}
                                            height="50"
                                            width="120"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="text-uppercase">
                                        {item.title}
                                    </h5>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <p className="">
                    Find all of the best hydroponics and indoor gardening brands
                    at HTG Supply! We carry all of the industry’s top name
                    brands from grow lights and hydroponic systems to nutrients,
                    soil, accessories and more. Shop top name brands like
                    Advanced Nutrients, AgroMax, FoxFarm, Roots Organics, Quest
                    and many more!
                </p>
            </div>
        </div>
    );
};

export default ShopBrand;
