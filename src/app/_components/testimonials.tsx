"use client"

import {ChevronLeft, ChevronRight, Clock, Scissors} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../../public/tutor1.png";
import Image from "next/image";

const testimonials = [
    {
        content: "Me surpreendeu demais a beleza da barbearia, decoração e etc. Amei o lugar. Atendimento nota 1000. Meu filho é autista e teve seu primeiro corte fora de casa com o Conrado, enquanto um outro profissional auxiliava com meu filho. Ele saiu da barbearia falando que cortar o cabelo é muito bom. Acho que nem tenho palavras que expressam minha alegria. Muito obrigada! Ganhou um mini cliente fiel.😍",
        author: "Mariana Souza",
        temp: "2 anos de Experiencia",
        image: tutor1,

    },

    {
        content: "Sou novo na cidade e fui muito bem recebido por Conrado e sua equipe, muito prestativo e educado e me faz sentir em casa, sem contar que onde encontra vem nos cumprimentar com a maior satisfação, então só tenho a agradecer o atendimento de todos profissionais pelo carinho e cuidado que tem com agente. Super indico! Gente boa de mais da conta.",
        author: "luis carlos",
        temp: "2 anos de Experiencia",
        image: tutor1,
    },

    {
        content: "Parabenizar excelente trabalho do Conrado e sua equipe, vale a pena vocês que não conhece ir lá conhecer atendimento extraordinário e preço acessívo agradecer pelo talento e atendimento!",
        author: "Eduardo Henrique",
        temp: "2 anos de Experiencia",
        image: tutor1,
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

