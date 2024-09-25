"use client";
import Image from "next/image";
import Nav from "@/components/navbar";
import { Button } from "@/components/ui/button"
import img from "../../public/tela.svg"
import Brain from "@/icons/brain";
import Lab from "@/icons/lab";
import { useState } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import footerImg from "@/icons/footerImg.svg"
import KnowledgeManagementSection from "@/components/KnowledgeManagementSection"
import Peoples from "@/icons/peoples";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import { Pridi } from "@next/font/google";
import icon1 from "../icons/Group1.svg"
import icon2 from "../icons/Group.svg"
import LogoS from "../icons/logos.svg"
import { Component } from "@/components/Nav";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Monster from "../icons/monster2.svg"
import CustomNavbar from "@/components/navbar";
import React, { useRef } from 'react';

const pridi = Pridi({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Escolha os pesos que precisa
});

import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    mais: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      funcionarios: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('https://api.hakutaku.co/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Email enviado com sucesso!');
      setFormData({
        email: '',
        mais: ''
      });
    } else {
      alert('Erro ao enviar o email.');
    }
  };



    const section2Ref = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
      if (section2Ref.current) {
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#EDE9E1]">
      <Component />
      <section className=" flex flex-col px-40   py-20 md:flex-row flex-grow w-full" id="principal">
        <div className="flex flex-grow flex-col md:pt-20 w-full md:w-3/5 gap-5 p-6">
        <h1 className={`${outfit.className} text-xl md:text-6xl font-bold leading-relaxed text-[##393736]`}>
            Reinvente a Gestão do conhecimento da sua empresa com gen IA</h1>
            <BlurFade delay={0.05} inView>  
        
            <p className={`text-[#310808] text-xs md:text-3xl font-pridi ${pridi.className}`}>Utilizando gen AI, capturamos e entregamos rapidamente as informações e insights que seus colaboradores precisam, valorizando o conhecimento criado dentro da própria empresa.</p>
            </BlurFade>
            <div className="flex flex-row gap-x-4">
            <Button  variant="outline" onClick={scrollToSection} className="bg-[#FF781F] text-white rounded-none lg:text-2xl"  > Explore a Hakutaku Agora</Button>
            <Button variant="outline" className="bg-transparent text-black border-black rounded-none lg:text-2xl border px-10 p-4 font-bold">Saiba mais</Button>
          </div>
        </div>
        <div className=" flex flex-col flex-grow sm:items-center sm:justify-center w-full  md:w-2/5">
        {/* <AnimatedBeamDemo /> */}
            <Image alt="imagem" src={img} width={800}></Image>

        </div>
      </section>
      <section className="w-full px-40 flex flex-row items-center justify-between">
        <div className="w-1/2 h-full flex flex-col items-start">
        <AnimatedBeamMultipleOutputDemo></AnimatedBeamMultipleOutputDemo>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Acesso Simplificado a Dados de Múltiplas Fontes</h1>
          <p className="text-xl">Nosso sistema integra e consome dados de diversas fontes, facilitando o acesso a informações relevantes de maneira centralizada. Com uma interface intuitiva via chat, você pode buscar e consultar dados rapidamente, sem complicações.</p>

        </div>




      </section>
      <section className="flex py-20 md:py-20 px-40 md:h-screen w-full md:gap-40 flex-col" id="conheca">

        <BlurFade className="flex md:h-screen w-full md:gap-40 gap-y-10 flex-col md:flex-row justify-between items-center">

        <div className="flex w-full md:w-2/5 text-white  gap-y-2 flex-col  items-center text-center bg-[#FF791F] p-8 rounded-3xl">
          <h3 className="text-xl md:text-3xl font-bold">Aumento de
          produtividade</h3>
          <p>Maximize a eficiência operacional e reduza o tempo gasto em buscas por informação. Com a Hakutaku, sua equipe pode focar no que realmente importa,
              impulsionando a produtividade e otimizando recursos. Acelere processos e elimine redundâncias agora.</p>
              <Image alt="imagem" src={icon1} width={200}></Image>


        </div>
        <div className={`flex w-full md:w-2/5 text-white gap-y-2 flex-col items-center text-center bg-[#FF791F] p-8 rounded-3xl ${outfit.className}`}>
      <h3 className="text-xl md:text-3xl font-bold">
        Valorização do conhecimento
      </h3>
      <p>
        Consolide e valorize o conhecimento crítico da sua empresa com a Hakutaku. Nossa plataforma facilita o acesso a informações valiosas,
        promovendo uma cultura de aprendizado contínuo e inovação. Fortaleça a tomada de decisão e a colaboração efetiva.
      </p>
      <Image alt="imagem" src={icon1} width={200} />
    </div>


          </BlurFade>


        <div className="flex h-screen w-full gap-20 flex-col md:flex-row justify-center text-[#310808]">
          <div className="w-full md:w-1/3 flex flex-col items-center p-2 text-center">
            <Brain />
            <h3 className="font-bold text-xl pt-3">Busca inteligênte com Gen AI</h3>
            <p>Buscador que procura informações em toda a base de dados da empresa.</p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center p-2 text-center">
            <Lab />
            <h3 className="font-bold text-xl pt-3">Integração com diversas plataformas</h3>
            <p>A Hakutaku consome documentos de diversas plataformas como o Google Drive.</p>
          </div>

          <div className=" w-full md:w-1/3 flex flex-col items-center p-2 text-center">
            <Peoples />
            <h3 className="font-bold text-xl pt-3">Customização de usuário</h3>
            <p>Customize os acessos aos documentos e tipos de insight por cargo de colaborador da empresa.</p>
          </div>
        </div>
      </section>
      <section className="flex h-1/2 w-full md:px-20 gap-40 px-40 bg-[#FF781F] flex-col py-20 md:py-10 items-center" id="contato" ref={section2Ref}>
        <div className="w-full text-center flex  flex-row justify-center items-center ">
          <div className="flex flex-col w-1/3">
          <h2 className="text-6xl text-white font-bold" >Valorize seu conhecimento com IA</h2>
          <p className="text-white">Veja a Hakutaku em ação! Preencha o formulário para agendar uma demonstração personalizada.</p>
          </div>
          <div className="w-1/3 flex flex-coç">

          <form onSubmit={handleSubmit}>
  <div className="sm:flex sm:flex-wrap justify-center md:gap-x-5 md:py-10 gap-y-5">
    {/* <div className="w-full max-w-sm text-left mb-5">
      <Label htmlFor="nome">Seu nome</Label>
      <Input type="text" id="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
    </div>
    <div className="w-full max-w-sm text-left mb-5">
      <Label htmlFor="empresa">Nome da empresa</Label>
      <Input type="text" id="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da empresa" />
    </div> */}
    {/* <div className="w-full max-w-sm text-left mb-5">
      <Label htmlFor="funcionarios">Número de funcionários</Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="1-10" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-10">1-10</SelectItem>
          <SelectItem value="11-50">11-50</SelectItem>
          <SelectItem value="51-100">51-100</SelectItem>
          <SelectItem value="+100">+100</SelectItem>
        </SelectContent>
      </Select>
    </div> */}
    {/* <div className="w-full max-w-sm text-left mb-5">
      <Label htmlFor="celular">Celular (com DDD)</Label>
      <Input type="text" id="celular" value={formData.celular} onChange={handleChange} placeholder="Celular" />
    </div> */}
    <div className="w-full max-w-sm text-left mb-5 text-white">
      <Label htmlFor="email">Email corporativo</Label>
      <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" />
    </div>
    <div className="w-full max-w-sm text-left mb-5 text-white">
      <Label htmlFor="mais">Como a hakutaku pode te ajudar?</Label>
      <Input type="text" id="mais" className="h-20" value={formData.mais} onChange={handleChange} placeholder="O que a Hakutaku irá mais te ajudar?" />
    </div>
  </div>
  <Button type="submit" className="w-full text-xl  px-10 sm:w-auto self-center bg-[#FF781F]">Enviar</Button>
</form>


          </div>
  
        
        </div>
      </section>
      <section className="flex flex-col items-center w-full px-40 md:my-8 p-5 gap-5 text-[#310808]" id="duvidas">
  <h2 className="text-3xl text-[#FF781F] font-bold">Dúvidas frequentes</h2>
  
  <div className="flex flex-col sm:flex-row w-full">
    <div className="w-full md:w-1/3  mb-5 sm:mb-0 md:flex flex items-center justify-center">
      <Image alt="imagem" src={Monster} />
    </div>
    <div className="w-full md:w-2/3 flex flex-col gap-3 font-bold">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Como é implementado?</AccordionTrigger>
          <AccordionContent>
          O onboarding da plataforma é feito conosco, a fim de garantir uma transição suave e eficiente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Quanto custa?</AccordionTrigger>
          <AccordionContent>
          O custo é calculado por colaborador que usará a plataforma. Entre em contato para obter uma proposta.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Funciona para quais plataformas?</AccordionTrigger>
          <AccordionContent>
          Até o momento somente para Google Drive, mas estamos trabalhando para incluir demais plataformas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Como a Hakutaku garante a segurança das informações?</AccordionTrigger>
          <AccordionContent>
          A Hakutaku garante a segurança das informações empresariais através de um rigoroso controle de acesso baseado em funções (RBAC) e da adoção de políticas de segurança alinhadas aos mais altos padrões internacionais, como ISO 27001. Isso garante que apenas usuários autorizados tenham acesso às informações necessárias para suas atividades, protegendo assim a integridade e a confidencialidade dos dados empresariais. Além disso, estamos comprometidos em garantir a conformidade com regulamentos de proteção de dados, como a LGPD, através de medidas robustas de gerenciamento de consentimento, anonimização de dados e transparência no processamento de informações pessoais.
          </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  </div>
      </section>
      <footer className="bg-[#393736] text-white w-full px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo à esquerda */}
        <div className="mb-4 md:mb-0">
          <Image src={footerImg} alt="Logo" width={150} />
        </div>

        {/* Informações de contato */}
        <div className="text-center md:text-right">
          <p className="text-lg">Telefone: (11) 9 4762-2555</p>
          <p className="text-lg">Email: raduan.muarrek@hakutaku.co</p>
        </div>
      </div>
    </footer>


  
      
    </main>
  );
}
