"use client"

import {ChevronLeft, ChevronRight, Clock, Scissors} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";

const plans = [
  {
    title: "Plano Bronze 🪒✨",
    description: "Perfeito para quem gosta de estar sempre com o visual em dia. Inclui 2 cortes por mês com todo o cuidado e qualidade da Conrado Barbearia.",
    duration: "45min",
    price: "R$ 60",
    icon: <Scissors />,
    linkText: "Olá, vi no site sobre o Plano Bronze com 2 cortes por mês por 60 reais."
  },

  {
    title: "Plano Prata 💈🔥",
    description: "Ideal para quem quer praticidade e estilo. São 3 cortes por mês com atendimento prioritário e todo o conforto da Conrado Barbearia.",
    duration: "45min",
    price: "R$ 80",
    icon: <Scissors />,
    linkText: "Olá, vi no site sobre o Plano Prata com 3 cortes por mês por 80 reais."
  },

  {
    title: "Plano Ouro 👑✂️",
    description: "Para os clientes que querem o máximo em cuidado e exclusividade. 4 cortes por mês, com bebidas e tratamento especial durante o atendimento.",
    duration: "45min",
    price: "R$ 100",
    icon: <Scissors />,
    linkText: "Olá, vi no site sobre o Plano Ouro com 4 cortes por mês por 100 reais."
  }

];

export function Plans() {

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

                <h2 className="text-4xl font-bold mb-12">Planos</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef} >
                        <div className="flex">
                            {plans.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                href="#"
                                                className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                Entrar em contato
                                            </a>


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

