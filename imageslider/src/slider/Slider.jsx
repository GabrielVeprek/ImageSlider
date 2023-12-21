import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import image1 from "../images/image1.jpeg"
import image2 from "../images/image2.jpeg"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.jpg"

export const Slider = () => {
    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            loop={true}

            cubeEffect={{
                shadow: true,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <img src={image1} alt={"1"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt={"2"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt={"3"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt={"4"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt={"5"}/>
            </SwiperSlide>
        </Swiper>
    )
}