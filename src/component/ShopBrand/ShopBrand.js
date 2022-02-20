import React from "react";
import "./ShopBrand.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img0 from "../../img/logo.png";
import img1 from "../../img/logo/logo1.png";
import img2 from "../../img/logo/logo2.png";
import img3 from "../../img/logo/logo3.png";
import img4 from "../../img/logo/logo4.png";
import img5 from "../../img/logo/logo5.png";

const ShopBrand = () => {
    const ListBrand = [
        {
            title: "Manggala hydrasdofarm",
            brandimg: [img0],
        },
        {
            title: "Mangasdagala hydrofarm",
            brandimg: [img1],
        },
        {
            title: "Manggala hydasdaarofarm",
            brandimg: [img2],
        },
        {
            title: "Manggala hydrofarm",
            brandimg: [img3],
        },
        {
            title: "Manggala hydasdarofarm",
            brandimg: [img4],
        },
        {
            title: "Manggala hydasdarofarm",
            brandimg: [img5],
        },
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
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
            <div className="container mb-5">
                <span className="section-separator"></span>
                <p className="head-separator">
                    {" "}
                    We are with several other hydroponic partners
                </p>
            </div>
            <div className="container-fluid justify-content-center">
                <div className="brand-shop m-5 mx-0">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1700}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        className=" "
                    >
                        {ListBrand.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="img-fluid px-2 align-items-center rounded-circle ">
                                        <img
                                            className="  "
                                            src={item.brandimg}
                                            alt=""
                                        />
                                    </div>
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
