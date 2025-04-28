// Example usage in app/layout.tsx or any page file
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
} from "@/components/ui/resizable-navbar"; // Adjust the path based on where you saved the file
import { useState } from "react";


export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Transactions", link: "/transactions" },
    { name: "Send/Recieve", link: "/SR" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "About", link: "/about" }
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex flex-row space-x-2">
          <NavbarButton variant="secondary" href="/auth/login">Login</NavbarButton>
          <NavbarButton href="/auth/signup">Sign Up</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
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
          <div className="mt-4 flex w-full flex-col gap-2">
            <NavbarButton variant="secondary" href="/auth/login">Login</NavbarButton>
            <NavbarButton href="/auth/signup">Sign Up</NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}