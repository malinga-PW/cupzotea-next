"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import quote from "@/assets/img/quote.png";
import TestimonialV2Data from '@/assets/jsonData/testimonial/TestimonialV2Data.json';
import SingleTestimonialV2 from './SingleTestimonialV2';

interface DataType {
    sectionClass?: string;
}

const TestimonialV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-two-area default-padding bg-cover ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-two-info">
                                <div className="icon">
                                    <Image src={quote} alt="Image Not Found" />
                                </div>
                                <h2>Over 50K clients and 5,000 projects across the globe.</h2>
                                <div className="review-card">
                                    <h6>Excellent 18,560+ Reviews</h6>
                                    <div className="d-flex">
                                        <div className="icon">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <span>4.8/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 pl-60 pl-md-15 pl-xs-15">
                            <Swiper
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={true}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    }
                                }}
                                className="testimonial-style-two-carousel"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV2Data.map(testimonial =>
                                        <SwiperSlide className="swiper-slide" key={testimonial.id}>
                                            <SingleTestimonialV2 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV2;