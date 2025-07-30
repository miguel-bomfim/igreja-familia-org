'use client'

import React from 'react'
import Slider from "react-slick";
import Image from "next/image";

export default function HomeCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const itemsCarousel = [
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1753089574948-9a9a358bc575',
      alt: 'Imagem 2'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1752606402449-0c14a2d6af70',
      alt: 'Imagem 3'
    }
  ];

  return (
    <div>
      <Slider {...settings}>
        <div className='relative'>
          <h1 className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 '>
            Bem vindo à <br/> <span className='text-6xl'>Igreja da Família</span>
          </h1>
          <Image
            src='/images/ig-familia-cult.jpg'
            alt="bem vindo"
            width={1920}
            height={1080}
            className="object-cover w-full h-[800px] blur-[4px]"
          />
          <span className='absolute -bottom-1 w-full text-center text-shadow-stone-950 bg-[#9db16f] bg-opacity-50 p-4'>
            Portanto, vocês já não são estranhos e forasteiros, mas concidadãos do povo santo e membros da família de Deus -
            <span className='text-md font-bold'> EFÉSIOS <span className='font-sans'>2:19</span></span>
          </span>
        </div>
        {
          itemsCarousel.map((item, idx) => (
            <div key={idx}>
              <Image
                key={idx}
                src={item.image}
                alt={item.alt}
                width={1920}
                height={1080}
                className="object-cover w-full h-[800px]"
              />
            </div>  
          ))
        }
      </Slider>
    </div>
  )
}
