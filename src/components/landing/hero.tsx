"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    tl.from(
      imageRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={heroRef} className="py-12 md:py-18">
      <div className="mx-auto max-w-8xl w-full px-2 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-0 text-sm text-primary">
              Plataforma para profesionales médicos
            </div> */}
            <h1 className="text-6xl font-bold tracking-tighter md:text-7xl text-default">
              <span className="text-heading">Gestione sus citas médicas</span> con eficiencia y precisión
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Medi-Appointment le permite organizar su agenda, gestionar pacientes y tratamientos en una sola plataforma
              intuitiva diseñada específicamente para profesionales de la salud.
            </p>
            <div className="flex flex-row flex-wrap gap-3 py-4">
              <Button
                className="px-3 py-2 text-sm sm:px-6 sm:py-3 md:py-5 md:px-7 sm:text-md"
                variant="secondary"
              >
                Registrarse
              </Button>
              <Button
                className="px-3 py-2 text-sm sm:px-6 sm:py-3 md:py-5 md:px-7 sm:text-md "
                variant="default"
              >
                Iniciar Sesión
              </Button>
            </div>
            {/* <div className="text-sm text-muted-foreground">
              No se requiere tarjeta de crédito. 14 días de prueba gratuita.
            </div> */}
          </div>
          <div ref={imageRef} className="mx-auto lg:mx-0 relative">
            <div className="relative h-[350px] w-full sm:h-[400px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/imageFondo.png"
              alt="Doctora sonriendo"
              fill
              className="object-contain"
              priority
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
