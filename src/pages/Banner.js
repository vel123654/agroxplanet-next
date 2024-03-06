'use client'
import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from '../lib/images'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <section className='py-12'>
            <div className='container'>
                <Swiper
                    navigation
                    pagination={{ type: 'fraction' }}
                    modules={[Navigation, Pagination]}
                    className='h-96 w-full rounded-lg'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={image}>
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image 
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Banner