
"use client";

import { Button, Navbar } from "flowbite-react";
import Logo from "../../public/logo.png"

export function Component() {
  return (
    <Navbar fluid rounded className="w-full bg-transparent">
      <Navbar.Brand href={Logo.src}>
        <img src={Logo.src} className="mr--6 sm:h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-[#FF781F]">Experimente agora</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-[#FF781F]">
        <Navbar.Link href="#conheca" className="text-[#FF781F]">Conheça mais</Navbar.Link>
        <Navbar.Link href="#contato" className="text-[#FF781F]">Contato</Navbar.Link>
        <Navbar.Link href="#duvidas" className="text-[#FF781F]">Duvidas Frequentes</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
