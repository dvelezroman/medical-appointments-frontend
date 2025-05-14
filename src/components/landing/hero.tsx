"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-12 md:py-35">
      <div className="w-full max-w-[1375px] mx-auto max-w-8xl px-3 md:px-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 items-center min-h-[400px]">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold text-balance sm:mx-0 text-default">
              <span className="text-heading">Gestione sus citas médicas</span>{' '}
              <span className="text-gray-500 dark:text-gray-300 font-light">con eficiencia y precisión</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg dark:text-gray-300">
              Medi-Appointment le permite organizar su agenda, gestionar pacientes y tratamientos en una sola plataforma intuitiva diseñada específicamente para profesionales de la salud.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mx-auto lg:mx-0 relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[420px]"
          >
            <Image
              src="/imageFondo.png"
              alt="Doctora sonriendo"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Botón
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full flex justify-center sm:justify-start sm:col-span-2 md:col-span-1 md:col-start-1"
          >
            <Link href="/auth/login">
              <Button className="px-3 py-4 text-sm sm:px-6 sm:py-3 md:py-5 md:px-7 sm:text-md" variant="default">
                Iniciar Sesión
              </Button>
            </Link>
          </motion.div> */}

        </div>
      </div>
    </section>
  )
}