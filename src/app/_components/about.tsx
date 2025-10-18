import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto da Barbearia"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                                />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Img}
                                alt="Foto do Chef"
                                fill
                                quality={100}
                                priority
                                />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">SOBRE</h2>

                        <p>
                        Na BarberDev, acreditamos que um bom corte de cabelo vai além da aparência—é uma experiência. Com profissionais qualificados e um ambiente moderno, oferecemos cortes, barbas e cuidados que elevam seu estilo e sua confiança. Nosso compromisso é proporcionar um atendimento personalizado, com técnicas de alto nível e produtos de qualidade, garantindo sempre o melhor para nossos clientes. Entre, sinta-se em casa e saia renovado. Seu estilo começa aqui!   
                        </p>  

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Aberto desde 2025
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Barbeiros de confiança, cortes de respeito. ✂️🔥
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Mais que um corte, uma experiência. 🎩💇‍♂️
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Aqui seu estilo ganha vida! 🔥💈
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a 
                                href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                                >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contado via WhatsApp
                            </a>

                            <a 
                                href="#"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                                >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Barbearia
                            </a>

                        </div>
                    </div> 

                </div>

            </div>
        </section>
    )
}