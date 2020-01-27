import React from 'react';
import Slider from 'react-slick';

// styles
import '../css/output.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Home = () => {
  const settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div>
        <h1 className='text-center'>1</h1>
      </div>
      <div>
        <h1 className='text-center'>2</h1>
      </div>
      <div>
        <h1 className='text-center'>3</h1>
      </div>
      <div>
        <h1 className='text-center'>4</h1>
      </div>
    </Slider>
  )
}
