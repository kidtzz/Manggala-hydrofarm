import React from "react";
import "./Content.scss";
import icon1 from "../../img/icon/1.png";
import icon2 from "../../img/icon/2.png";
import icon3 from "../../img/icon/3.png";

const Content = () => {
    const ListChose = [
        {
            icon: [icon1],
            title: "Terpercaya 100%",
            text: "Tempatnya sayuran segar hidroponik 100% terpercaya ",
        },
        {
            icon: [icon2],
            title: "Non Pestisida",
            text: "Menghasilkan tumbuhan yang segar, enak dan menyehatkan",
        },
        {
            icon: [icon3],
            title: "Kualitas Pelayanan",
            text: "Pelayanan Termudah, tercepat, dan terpercaya ",
        },
    ];
    return (
        <section className="choose-US ">
            <div className="container-fluid py-2 text-center">
                <h2 className="mb-2 fw-bold" data-aos="zoom-in-up">
                    Kenapa Memilih Manggala Hydrofarm?
                </h2>
                <span className="section-separator"></span>
                <div className=" row d-flex justify-content-center">
                    {ListChose.map((choose, index) => {
                        return (
                            <div
                                className="card px-0 m-2 mx-3 p-3 col-lg-4 col-md-4 lg-xl-4 col-lg-0 m-auto  "
                                key={choose}
                                data-aos="zoom-in-right"
                            >
                                <img
                                    src={choose.icon}
                                    className=" img-fluid justify-self-center"
                                    width="120"
                                    height="100"
                                    alt="..."
                                ></img>
                                <div className="card-body">
                                    <h6 className="card-title fw-bold text-uppercase">
                                        {choose.title}
                                    </h6>
                                    <p className="card-text">{choose.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Content;
