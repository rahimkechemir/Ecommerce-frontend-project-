import React from 'react'
import Product from './Product'
import './slideproduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function SlideProduct({data,title}) {
  // if data hasn't arrived yet (or the fetch failed), don't try to render the slider at all
  if (!data || data.length === 0) {
    return null
  }

  return (
    <div className='slideproduct'>
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>See our top products</p>
        </div>

        <Swiper
          modules={[Navigation,Autoplay]}
          navigation={true}      
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          className='mySwiper'
        >
          {data.map((item)=>{
            return(
              <SwiperSlide key={item.id}><Product item={item} /></SwiperSlide>

            )
          })}
          
        </Swiper>

      </div>
    </div>
  )
}

export default SlideProduct