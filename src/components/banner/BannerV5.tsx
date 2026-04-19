"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import BannerV5Data from "@/assets/jsonData/banner/BannerV5Data.json"
import SingleBannerV5 from './SingleBannerV5';

const BannerV5 = () => {

    return (
        <>
            <div className="banner-area banner-style-five-area content-right navigation-custom-large zoom-effect overflow-hidden text-light">
                <Swiper
                    direction="horizontal"
                    loop={true}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true
                    }}
                    speed={10}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    // autoplay={false}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    className="banner-style-three-carousel"
                    modules={[Keyboard, Autoplay, Pagination, Navigation, EffectFade]}
                >
                    <div className="swiper-wrapper">
                        {BannerV5Data.map(banner =>
                            <SwiperSlide className="banner-style-five" key={banner.id}>
                                <SingleBannerV5 banner={banner} />
                            </SwiperSlide>
                        )}
                    </div>
                    <div className="swiper-pagination" />
                </Swiper>
            </div>
        </>
    );
};

export default BannerV5;