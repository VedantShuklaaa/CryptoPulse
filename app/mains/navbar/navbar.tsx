"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "@/components/ui/resizable-navbar"; 
import { useState } from "react";
import { ModeToggle } from "@/app/mains/theme_button/themes";


export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Transactions", link: "/user/transactions" },
    { name: "Send/Recieve", link: "/user/sr" },
    { name: "Dashboard", link: "/user/dashboard" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex flex-row space-x-1">
          <NavbarButton variant="secondary" href="/auth/login">Login</NavbarButton>
          <NavbarButton href="/auth/signup">Sign Up</NavbarButton>
          <ModeToggle/>
        </div>
      </NavBody>


      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle 
            isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              className="w-full py-2 text-lg font-medium text-black dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex w-full flex-col items-center gap-2">
            <NavbarButton variant="secondary" href="/auth/login" className="w-full">Login</NavbarButton>
            <NavbarButton href="/auth/signup" className="w-full">Sign Up</NavbarButton>
            <ModeToggle/>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}