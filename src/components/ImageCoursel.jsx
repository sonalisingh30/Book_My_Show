import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

import {
  image_1_coursel,
  image_2_coursel,
  image_3_coursel,
} from "../data/fileImports";

// Import Swiper styles and custom CSS
import "swiper/css";
import "swiper/css/navigation";

function ImageCoursel() {
  const images = [image_1_coursel, image_2_coursel, image_3_coursel];
  return (
    <div className="mt-4 relative">
      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2.5, spaceBetween: 15 },
        }}
        centeredSlidesBounds={true}
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        initialSlide={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="custom-next custom-swiper-button absolute right-4 top-1/2 transform -translate-y-1/2">
          <FaGreaterThan />
        </div>
        <div className="custom-prev custom-swiper-button absolute left-4 top-1/2 transform -translate-y-1/2">
          <FaLessThan />
        </div>
      </Swiper>
    </div>
  );
}

export default ImageCoursel;
