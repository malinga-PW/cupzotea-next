"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialV3Data from "@/assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from './SingleTestimonialV3';

const TestimonialV3 = () => {

    return (
        <>
            <div className="testimonial-style-three-area bg-gray default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="testimonial-style-three-items">
                                <Swiper
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
                                    className="testimonial-style-three-carousel swiper"
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    <div className="swiper-wrapper">
                                        {TestimonialV3Data.map(testimonial =>
                                            <SwiperSlide className="swiper-slide" key={testimonial.id}>
                                                <SingleTestimonialV3 testimonial={testimonial} />
                                            </SwiperSlide>
                                        )}
                                    </div>

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

export default TestimonialV3;