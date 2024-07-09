import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "@/icons/logo";

export default function App() {
  return (
    <Navbar className="bg-[#F9F6F0]">
  
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
          </NavbarContent>
          <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="start">
        <NavbarItem>
          <Button as={Link} className="bg-[#C25621] text-white"  href="#" variant="flat">
            Explore
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
