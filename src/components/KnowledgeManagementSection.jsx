import React from 'react';
import Image from 'next/image'; // ou o método de importação correto, dependendo do seu projeto
import Button from './Button'; // certifique-se de que o componente Button está no caminho correto
import { Pridi } from "@next/font/google";
import { Outfit } from "@next/font/google";



const pridi = Pridi({
    subsets: ['latin'],
    weight: ['400', '500', '600'], // Escolha os pesos que precisa
  });
  

const KnowledgeManagementSection = ({ title, description, img, scrollToSection }) => {
    return (
        <section className="flex flex-col py-20 md:flex-row flex-grow w-full" id="principal">
            <div className="flex flex-grow flex-col md:pt-20 w-full md:w-3/5 gap-5 p-6">
                <h1 className={`${Outfit.className} text-xl md:text-6xl font-bold leading-relaxed text-[#393736]`}>
                    {title}
                </h1>
                <p className={`text-[#310808] text-xs md:text-3xl font-pridi ${pridi.className}`}>
                    {description}
                </p>
                <div className="flex flex-row gap-x-4">
                    <Button variant="outline" onClick={scrollToSection} className="bg-[#FF781F] text-white rounded-none lg:text-2xl">
                        Explore a Hakutaku Agora
                    </Button>
                    <Button variant="outline" className="bg-transparent text-black border-black rounded-none lg:text-2xl border px-10 p-4 font-bold">
                        Saiba mais
                    </Button>
                </div>
            </div>
            <div className="flex flex-col flex-grow sm:items-center sm:justify-center w-full md:w-2/5">
                <Image alt="imagem" src={img} width={800} />
            </div>
        </section>
    );
};

export default KnowledgeManagementSection