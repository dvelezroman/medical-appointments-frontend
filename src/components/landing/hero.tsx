"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-12 md:py-18">
      <div className="mx-auto max-w-8xl w-full px-2 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-bold tracking-tighter md:text-7xl text-default">
              <span className="text-heading">Gestione sus citas médicas</span> con eficiencia y precisión
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Medi-Appointment le permite organizar su agenda, gestionar pacientes y tratamientos en una sola plataforma intuitiva diseñada específicamente para profesionales de la salud.
            </p>
            <div className="flex flex-row flex-wrap gap-3 py-4">
              <Link href="/auth/register">
                <Button className="px-3 py-2 text-sm sm:px-6 sm:py-3 md:py-5 md:px-7 sm:text-md" variant="secondary">
                  Registrarse
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button className="px-3 py-2 text-sm sm:px-6 sm:py-3 md:py-5 md:px-7 sm:text-md" variant="default">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mx-auto lg:mx-0 relative"
          >
            <div className="relative h-[350px] w-full sm:h-[400px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/imageFondo.png"
                alt="Doctora sonriendo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}