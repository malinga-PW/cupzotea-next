"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import BannerV2Data from "@/assets/jsonData/banner/BannerV2Data.json"
import SingleBannerV2 from './SingleBannerV2';

const BannerV2 = () => {

    return (
        <>
            <div className="banner-area banner-style-two content-right navigation-custom-large zoom-effect overflow-hidden text-light">
                <Swiper
                    direction="horizontal"
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    effect="fade"
                    className="banner-fade"
                    modules={[Keyboard, Autoplay, Pagination, EffectFade]}
                >
                    <div className="swiper-wrapper">
                        {BannerV2Data.map(banner =>
                            <SwiperSlide className="swiper-slide banner-style-two" key={banner.id}>
                                <SingleBannerV2 banner={banner} />
                            </SwiperSlide>
                        )}
                    </div>
                    <div className="swiper-pagination" />
                </Swiper>
            </div>
        </>
    );
};

export default BannerV2;