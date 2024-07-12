import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "../icons/logo"


export default function App() {
  return (
      <Navbar
          className="w-full md:w-full bg-[#F9F6F0] justify-center"
      classNames={{
          item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
        <Logo />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#mais">
          Conheça mais
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#contato"  color="foreground" aria-current="page">
          Contato
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#duvidas">
          Dúvidas frequentes
          </Link>
              </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
