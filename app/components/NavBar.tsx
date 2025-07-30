"use client"

import React, { useState } from 'react'
import LogoIgreja from "@/app/components/svg/LogoIgreja";
import { Menu, X } from "lucide-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Início", href: "/" },
    { name: "Quem somos", href: "/sobre" },
    { name: "Nossa fé", href: "/fe" },
    { name: "Recursos", href: "/recursos" },
    { name: "Pastores", href: "/pastores" },
    { name: "Onde estamos", href: "/localizacao" }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className='text-white text-lg absolute z-50 w-full bg-gradient-to-b from-slate-500/50 via-slate-500/25 to-slate-500/0'>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-6 px-8 lg:px-24 gap-4 items-center">
          <div className="flex-shrink-0">
            <LogoIgreja className="w-38" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 font-semibold">
              {
                links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))
              }
            </ul> 
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
        
      </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
