"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import illustration5 from "@/assets/img/illustration/5.png"
import shape16 from "@/assets/img/shape/16.png"
import shape17 from "@/assets/img/shape/17.png"
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json"
import SingleTestimonialV1 from './SingleTestimonialV1';

interface DataType {
    sectionClass?: string
}

const TestimonialV1 = ({ sectionClass }: DataType) => {

    return (
        <>
            <div className={`testimonial-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="testimonial-style-one-items bg-gray-secondary">
                        <div className="row align-center">
                            <div className="col-xl-5 pr-80 pr-md-15 pr-xs-15">
                                <div className="testimonial-style-one-thumb">
                                    <Image src={illustration5} alt="Image Not Found" />
                                    <div className="shape">
                                        <Image src={shape16} alt="Image Not Found" />
                                        <Image src={shape17} alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <Swiper
                                    direction="horizontal"
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
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

export default TestimonialV1;