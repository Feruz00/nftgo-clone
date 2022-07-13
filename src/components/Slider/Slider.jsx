import React, { useRef } from 'react'
import Slider from "react-slick";
import './Slider.css'
import trading from '../../asserts/meta/trading.png'
import discord from '../../asserts/meta/discord.jpg'
import apikey from '../../asserts/meta/APIKey.png'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Slides = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          
        ]
      };
    const slide = useRef()
  return (
    <div  className='nft__slider-container'>
        <div className='nft__slider'>
          <Slider {...settings} ref={slide}>
            <div className='nft__img-container'>
              <img src={discord} alt="traing"  className='nft__slider-img' />  
            </div>
            <div className='nft__img-container'>
              <img src={trading} alt="traing" className='nft__slider-img'  />
            </div>
            <div className='nft__img-container'>
              <img src={apikey} alt="traing"  className='nft__slider-img' />
            </div>
            <div className='nft__img-container'>
              <img src={discord} alt="traing"  className='nft__slider-img' />  
            </div>
            <div className='nft__img-container'>
              <img src={trading} alt="traing" className='nft__slider-img'  />
            </div>
            
          </Slider>
          <div className='nft__slider-left' onClick={()=>slide.current.slickPrev()}>
            <KeyboardArrowLeftIcon />
          </div>  

          <div className='nft__slider-right' onClick={()=>slide.current.slickNext()}>
            <ChevronRightIcon />
          </div>
        </div>
        
    </div>
  )
}

export default Slides