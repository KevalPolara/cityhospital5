import React from 'react';
import {useEffect, useState }from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import 'swiper/css';
import "./swiper.css"
import { Heading } from '../../components/UI/Heading/Heading';

function Review(props) {
    const [data,SetData]=useState([]);
  
    const getData=async()=>{
      const response=await fetch("https://jsonplaceholder.typicode.com/comments");
  
      const fdata= await response.json();
      SetData(fdata)
  }
  
  useEffect(()=>{
      getData();
  },[])
    return (
    <div>
    <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="section-title"><Heading>Reviews</Heading></div>
        <Swiper navigation={{}}
      // spaceBetween={100}
      breakpoints={{
        768 :{
          // Customize options for screens >= 768px wide
          slidesPerView: 2,
          spaceBetween:20,
        },
        992 : {
          // Customize options for screens >= 992px wide
          slidesPerView: 3,
          spaceBetween :40,
        },
        1200 :{
          // Customize options for screens >= 1200px wide
          slidesPerView: 3,
          spaceBetween: 80
        },
        className:'myswiper'
      }}
      // slidesPerView={3}
       >
      {
        data.map((v)=>{
          return(
            <div className='swiper'>
            <SwiperSlide> <Card
                      name={v.name}
                      description={v.body}              
            /></SwiperSlide> 
            </div>
          )
        })
      }
      </Swiper>
      </div>
      </section>    
        </div>
    );
}

export default Review;