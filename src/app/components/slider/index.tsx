'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import Link from 'next/link'
import flash from '../../../../public/flash.webp'
import { Hero } from '@/app/types/hero' 

export default function FancySlider() {
  const [heroes, setHeroes] = useState<Hero[]>([])

  useEffect(() => {
    fetch('/api/heroes')
      .then(res => res.json())
      .then(data => setHeroes(data))
      .catch(console.error)
  }, [])

  if (heroes.length === 0) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
        <img src={flash.src} alt="flash" className="w-62 h-62 object-contain" />
        <h1 className="text-2xl font-semibold">Carregando...</h1>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto py-10">
      <h1 className="text-center font-black text-2xl p-2">Escolha seu Herói!</h1>
      <Swiper
        modules={[EffectCube, Autoplay]}
        effect="cube"
        grabCursor={true}
        autoplay={{ delay: 2500 }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="w-[220px] h-[480px]"
      >
        {heroes.map(hero => (
          <SwiperSlide
            key={hero.id}
            className="rounded-2xl overflow-hidden text-center"
            title={hero.nome}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={hero.image.img1} />
              <img
                src={hero.image.img1}
                alt={hero.nome}
                className="w-full h-full object-cover rounded-2xl shadow-2xl relative"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
