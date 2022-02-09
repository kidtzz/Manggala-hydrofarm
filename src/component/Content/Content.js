import React from "react";
import "./Content.scss";
import icon1 from "../../img/icon/1.png";

const Content = () => {
    const ListChose = [
        {
            icon: [icon1],
            title: "Terpercaya 100%",
            text: "adfhakhf",
        },
        {
            icon: [],
            title: "Non Pestisida",
            text: "asdj",
        },
        {
            icon: [],
            title: "Kualitas Pelayanan",
            text: "asdj",
        },
    ];
    return (
        <section className="choose-US  bg-content2">
            <div className="container-fluid py-5 text-center">
                <h2 className="mb-5">Kenapa Memilih Manggala Hydrofarm?</h2>
                <div className=" row d-flex justify-content-center">
                    {ListChose.map((choose, index) => {
                        return (
                            <div
                                className="card px-0 m-2 mx-3 p-3  "
                                key={choose}
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
