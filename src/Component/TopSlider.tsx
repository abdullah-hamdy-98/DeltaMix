"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


function TopSlider() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-general-mainSlider">
                            <div className="rslides">
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    autoplay={{ delay: 3000 }}
                                >
                                    <SwiperSlide><img src="/slide/photo/14/cover_1.png" alt="Slide 1" /></SwiperSlide>
                                    <SwiperSlide><img src="/slide/photo/15/cover_2.png" alt="Slide 2" /></SwiperSlide>
                                    <SwiperSlide><img src="/slide/photo/17/cover_3.png" alt="Slide 3" /></SwiperSlide>
                                    <SwiperSlide><img src="/slide/photo/18/cover_4.png" alt="Slide 4" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopSlider;



