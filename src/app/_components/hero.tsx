import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import logoBarber from '../../../public/logo-barber.png';
import Image from 'next/image';

export function Hero(){
    return(
        <section className="bg-slate-900 text-white relative overflow-hidden">
            
            <div>
                <Image 
                src={logoBarber}
                alt='Logo da Barbearia'
                fill
                sizes="100vw"
                priority
                className='object-contain opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>
            


            <div className='container mx-auto py-16 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>
                       
                       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.
                       </h1>

                       <p className="lg:text-lg">
                       "Seja bem-vindo à Barber House! Aqui, cada corte é um detalhe de estilo e confiança. Agende seu horário e eleve seu visual!"
                       </p>


                        <a href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogo className="w-5 h-5" />
                            Agende seu Horario
                        </a>


                       <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md" >8:00 às 17:00</b> de segunda a sábado
                            </p>
                       </div>

                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image 
                        src={logoBarber}
                        alt="Logo da Barbearia"
                        /* mudei o boject-container para cover */
                        className='object-contain'
                        fill
                        sizes="(max-width: 768px) 0vw, 50vw"
                        quality={100}
                        priority
                        />
                    </div>

                </article>

            </div>


        </section>
    )
}
