

import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css/navigation'; // ← Add this if using Navigation
import 'swiper/css/autoplay';
import 'swiper/css';



// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper loop={true} slidesPerView={1}  loopedSlides={3} 
          autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="content">
                <h4>introducing the new </h4>
                <h3>microsoft xbox <br /> controller</h3>
                <p>windows 7/10 compatible, ps3 controller</p>
                <Link to="/shop" className="btn">Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero1.jpg" alt="slider-hero1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introducing the new </h4>
                <h3>microsoft xbox <br /> controller</h3>
                <p>windows 7/10 compatible, ps3 controller</p>
                <Link to="/shop" className="btn">Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero2.jpg" alt="slider-hero2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introducing the new </h4>
                <h3>microsoft xbox <br /> controller</h3>
                <p>windows 7/10 compatible, ps3 controller</p>
                <Link to="/shop" className="btn">Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero3.jpg" alt="slider-hero3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


    </>
  );
}
export default HeroSlider;
