"use client"

import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <header
      ref={headerRef}
      className=" top-0 z-50 w-full bg-background"
    >
      <div className="mx-auto max-w-8xl w-full px-4 flex h-16 items-center justify-between">
        {/* <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Medi-Appointment</span>
          </Link>
        </div> */}

        {/* Desktop Navigation */}
        {/* <nav className="hidden inline-flex-at-800 items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Características
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonios
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Precios
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav> */}

        <div className="flex items-center gap-4 w-full justify-end">
          <ModeToggle />
          <Button variant="default" className="hidden inline-flex-at-800">Iniciar Sesión</Button>
          <Button variant="secondary" className="hidden inline-flex-at-800">Registrarse</Button>
          <Button variant="ghost" size="icon" className="inline-flex hidden-at-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="block hidden-at-800 container py-4 px-0 bg-background border-b mx-auto ">
          <nav className="flex flex-col space-y-4">
            {/* <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link> */}
            <div className="flex flex-row gap-2 pt-2 mx-auto">
              <Button variant="default" className="w-[120px]">
                Iniciar Sesión
              </Button>
              <Button variant="secondary" className="w-[120px]">
                Registrarse
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
