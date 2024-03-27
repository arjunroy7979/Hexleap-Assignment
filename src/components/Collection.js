import React from 'react'
import './Collection.css'
import Slider from "react-slick";
const Collection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1238,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-12 col-md-12 text-center'>
                    <h1>Collection Spotlight</h1>
                </div>
                <div className='col-12 col-md-12 text-center'>
                    <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <div className='col-12 col-md-12 text-center slider-container'>
                    <Slider {...settings}>
                        <div>
                            <div className='card'>
                                <img src='./images/ticket1.png' className="card-img-top" alt="..." />
                                <div className='text-center'>
                                    <h5 className="card-title">Las Vegas Aviators</h5>
                                    <p>{"OCT 15"} | {"SUN"} | {"4:30 PM"}</p>
                                    <p>{"Las Vegas Ballpark, Las Vegas, Nevada"}</p>
                                    <button className='btn btn-sm btn-dark px-4 mb-2'>{"Take Flight Collection"}</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='./images/ticket1.png' className="card-img-top" alt="..." />
                                <div className='text-center'>
                                    <h5 className="card-title">Las Vegas Aviators</h5>
                                    <p>{"OCT 15"} | {"SUN"} | {"4:30 PM"}</p>
                                    <p>{"Las Vegas Ballpark, Las Vegas, Nevada"}</p>
                                    <button className='btn btn-sm btn-dark px-4 mb-2'>{"Take Flight Collection"}</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='./images/ticket1.png' className="card-img-top" alt="..." />
                                <div className='text-center'>
                                    <h5 className="card-title">Las Vegas Aviators</h5>
                                    <p>{"OCT 15"} | {"SUN"} | {"4:30 PM"}</p>
                                    <p>{"Las Vegas Ballpark, Las Vegas, Nevada"}</p>
                                    <button className='btn btn-sm btn-dark px-4 mb-2'>{"Take Flight Collection"}</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Collection