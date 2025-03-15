import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <section className="bg-slate-900 py-16 text-white">
            <div className="container mx-auto px-4"></div>

            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Conrado Barber</h3>
                    <p className="mb-4">Cuide do seu Estilo na Barbearia Conrado</p>
                    <a
                        href="#"
                        className="bg-green-500 px-4 py-2 rounded-md"
                    >
                        Contato via WhatsApp
                    </a>
                </div>


                <div>
                    <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                    <p>Email: teste@teste.com</p>
                    <p>Telefone: (34) 24232424242</p>
                    <p>Rua: Alameda Jose de Oliveira, Jardim Holanda, Uberlandia | MG</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                    <div className="flex gap-4">
                        <a 
                            href="#"
                            target="_blank"
                        >
                            <FacebookLogo className="w-8 h-8" />
                        </a>
                        <a 
                            href="#"
                            target="_blank"
                        >
                            <InstagramLogo className="w-8 h-8" />
                        </a>
                        <a 
                            href="#"
                            target="_blank"
                        >
                            <YoutubeLogo className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </footer>

        </section>
    );
}