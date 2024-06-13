import Product1 from "../../public/images/image-product-1.jpg";
import Product2 from "../../public/images/image-product-2.jpg";
import Product3 from "../../public/images/image-product-3.jpg";
import Product4 from "../../public/images/image-product-4.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/styles.css";

import { Pagination, Navigation } from "swiper/modules";

// const [click, setClick] = useState(false)

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Product1} alt="Product1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product2} alt="Product2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product3} alt="Product3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product4} alt="Product4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
