

import './MySlider.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";



// import required modules
import { EffectCreative, EffectCards } from "swiper";



const MySlider = ({slides}) => {

  return (
    <>
    <div className='myslider'>
        <h5>Swip me</h5>
        
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {slides.map(slide =>
             (<SwiperSlide key={slide.title}>
             <img src={slide.image} alt={slide.title} />
             </SwiperSlide>
             )
             )}
      </Swiper>
      </div>
    </>
  )
}

const MySlider2 = ({slides}) => {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      {slides.map(slide =>
        (<SwiperSlide key={slide.title}>
        <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
        )
        
        )}
      </Swiper>
    </>
  )
}


export default MySlider
export {MySlider2}

