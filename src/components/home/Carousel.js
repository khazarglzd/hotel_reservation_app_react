import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <div
                    className="carousel slide"
                >
                    <div className="carousel-inner">
                        <Slider {...settings}>
                            {carouselData.map((val, index) => (
                                <div className="carousel-item" key={index}>
                                    <img className="w-100" src={val.img} alt="Image" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}