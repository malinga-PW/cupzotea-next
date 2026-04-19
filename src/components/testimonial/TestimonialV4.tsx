"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import illustration13 from "@/assets/img/illustration/13.png"
import Image from 'next/image';
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json";
import SingleTestimonialV1 from './SingleTestimonialV1';

const TestimonialV4 = () => {

    return (
        <>
            <div className="testimonial-style-one-are default-padding mt-80">
                <div className="container">
                    <div className="testimonial-style-one-items bg-dark text-light">
                        <div className="row align-center">
                            <div className="col-xl-5">
                                <div className="testimonial-style-one-thumb">
                                    <Image src={illustration13} alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <Swiper
                                    direction="horizontal"
                                    loop={true}
                                    autoplay={true}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"

                                    }}
                                    className="testimonial-style-one-carousel"
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    <div className="swiper-wrapper">
                                        {TestimonialV1Data.map(testimonial =>
                                            <SwiperSlide key={testimonial.id}>
                                                <SingleTestimonialV1 testimonial={testimonial} />
                                            </SwiperSlide>
                                        )}
                                    </div>
                                    <div className="swiper-nav-left">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV4;