"use client"

import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from "@/assets/slider-image-1.jpeg"
import img2 from "@/assets/slider-image-2.jpeg"
import img3 from "@/assets/slider-image-3.jpeg"
import Image, { StaticImageData } from "next/image"
import React from "react"
import Link from "next/link"

interface SlideItem {
  img: StaticImageData
  title: string
  subtitle: string
}

const imageList: SlideItem[] = [
  {
    img: img1,
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
  },
  {
    img: img2,
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
  },
  {
    img: img3,
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
  },
]

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  )

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {imageList.map((slide, index) => (
            <CarouselItem key={index} className="basis-full">
              <Card className="w-full overflow-hidden border-0 p-0 rounded-none">
                <CardContent className="relative w-full h-70 sm:h-95 md:h-105 lg:h-115 p-0">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className=" object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-green-800/80 via-green-700/50 to-transparent">
                  <div className="flex h-full items-center px-6 sm:px-10 md:px-16">
                    <div className="flex flex-col items-start gap-2 sm:gap-3 max-w-55 sm:max-w-md md:max-w-lg text-white">
                      <h4 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight wrap-break-word">
                        {slide.title}
                      </h4>
                      <p className="text-sm sm:text-base opacity-90">
                        {slide.subtitle}
                      </p>
                      <Link
                        href="/shop"
                        className="mt-1 sm:mt-2 py-2 px-5 sm:px-6 rounded-xl border-2 text-sm sm:text-[16px] font-semibold text-green-600 transition bg-white hover:scale-105"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>
    </div>
  )
}