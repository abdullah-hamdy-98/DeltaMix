"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BottomSlider() {
    return (
        <div dir="ltr" className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="app101-general-ads">
                        <div className="owl-carousel" id="owl-ads">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}

                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                            >
                                <SwiperSlide> <Image width={1140} height={240} src="/slide/photo/1/ads_1.png" alt="" /> </SwiperSlide>
                                <SwiperSlide> <Image width={1140} height={240} src="/slide/photo/19/ads_2.png" alt="" /> </SwiperSlide>
                                <SwiperSlide> <Image width={1140} height={240} src="/slide/photo/22/web.png" alt="" /> </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomSlider;