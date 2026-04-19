"use client";
import TestimonialV5Data from "@/assets/jsonData/testimonial/TestimonialV5Data.json"
import SingleTestimonialV5 from "./SingleTestimonialV5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialV5 = () => {
    return (
        <>
            <div className="testimonial-style-three-area text-light relative">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-12">
                            <div className="testimonial-style-three-items">
                                <Swiper
                                    className="testimonial-style-three-carousel"
                                    direction="horizontal"
                                    loop={true}
                                    autoplay={false}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    }}
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    {TestimonialV5Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id} >
                                            <SingleTestimonialV5 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}

                                    {/* Navigation */}
                                    <div className="swiper-nav-left">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV5;