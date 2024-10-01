
"use client";

import { Button, Navbar } from "flowbite-react";
import Logo from "../../public/logo.png"

export function Component() {
  return (
    <Navbar fluid rounded className="w-full bg-transparent px-10 md:px-40">
        <img src={Logo.src} className="mr--6 h-10 sm:h-20" alt="Logo" />
      <div className="flex md:order-2">
        <Button className="bg-[#FF781F] text-3xl">Experimente agora</Button>
      </div>
      <Navbar.Collapse className="text-[#FF781F] hidden">
        <Navbar.Link href="#conheca" className="text-[#FF781F]">Conheça mais</Navbar.Link>
        <Navbar.Link href="#contato" className="text-[#FF781F]">Contato</Navbar.Link>
        <Navbar.Link href="#" className="text-[#FF781F]">Duvidas Frequentes</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
