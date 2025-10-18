"use client"

import {ChevronLeft, ChevronRight} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    title: "Corte Clássico ✂️",
    image: "/corte1.png",
    price: "R$35",
  },
  {
    title: "Cabelo e Barba 🪒",
    image: "/corte2.png",
    price: "R$55",
  },
  {
    title: "Corte Degradê 🔥",
    image: "/corte3.png",
    price: "R$40",
  }
];

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-widht: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef} >
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-4 space-y-4 h-full flex flex-col">

                                        <div>
                                            <img className="w-full rounded-sm " src={item.image} alt={item.title} />

                                            <div className="flex justify-between items-center w-full pt-2 " >
                                                <strong className="text-xl">{item.title}</strong>
                                                <button className="text-white text-lg  bg-[#d94140] py-1 px-2 rounded border-none cursor-default ">{item.price}</button>
                                            </div>

                                        </div>
                                        

                                    </article>
                                </div>
                            ))} 
                        </div>
                    </div>

                    <button 
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button 
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>


                </div>

                
            </div>
        </section>
    )
}

