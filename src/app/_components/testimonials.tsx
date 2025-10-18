"use client"

import {ChevronLeft, ChevronRight,} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../../public/tutor1.png";
import Image from "next/image";

const testimonials = [
    {
    author: "Carlos Henrique",
    content: "Excelente atendimento! O barbeiro é super atencioso e o ambiente é muito agradável. Recomendo demais!",
    temp: "há 2 dias",
    image: tutor1
    },
    {
    author: "Lucas Almeida",
    content: "Corte impecável e o fade ficou perfeito. Além disso, o cafézinho que servem é top!",
    temp: "há 5 dias",
    image: tutor1
    },
    {
    author: "João Pedro",
    content: "Achei o serviço muito profissional e o preço justo. Saí satisfeito e com o visual renovado!",
    temp: "há 1 semana",
    image: tutor1
    },
    {
    author: "Marcos Vinícius",
    content: "A barbearia tem um estilo moderno e os profissionais mandam muito bem. Atendimento rápido e de qualidade.",
    temp: "há 2 semanas",
    image: tutor1
    },
    {
    author: "Felipe Andrade",
    content: "Melhor barbearia da região! Sempre saio de lá com autoestima lá em cima. Ambiente acolhedor e música boa!",
    temp: "há 3 semanas",
    image: tutor1
    }
]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className="overflow-hidden" ref={emblaRef} >
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">

                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="relative w-24 h-24">
                                            <Image 
                                                src={item.image}
                                                alt={item.author}
                                                fill
                                                sizes="96px"
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        <p className="text-gray-200">{item.content}</p> 

                                        <div>
                                            <p className="font-bold">{item.author}</p>
                                            <p className="text-sm text-gray-400">{item.temp}</p>
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

