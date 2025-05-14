"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function CTA() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Datos:", data);
  }
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Texto animado */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimice su consulta médica hoy mismo
            </h2>
            <p className="md:text-xl">
              Únase a miles de profesionales médicos que ya han transformado la gestión de sus consultas con MediAgenda.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gray-300" />
                Acceso inmediato al panel de pacientes
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gray-300" />
                Configuración rápida de tu primera agenda médica
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gray-300" />
                Asistencia personalizada para digitalizar tu consulta
              </li>
            </ul>
          </motion.div>

          {/* Formulario animado */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 text-foreground rounded-lg p-7 shadow-lg mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Comience su prueba gratuita</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">Nombre</label>
                  <Input id="first-name" name="firstName" placeholder="Ingrese su nombre"  className="border border-gray-300 dark:border-gray-600" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Apellido</label>
                  <Input id="last-name" name="lastName" placeholder="Ingrese su apellido"  className="border border-gray-300 dark:border-gray-600"/>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
                <Input id="email" name="email" type="email" placeholder="nombre@ejemplo.com" className="border border-gray-300 dark:border-gray-600"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="specialty" className="text-sm font-medium">Especialidad médica</label>
                <Input id="specialty" name="specialty" placeholder="Ej: Cardiología, Pediatría, etc."  className="border border-gray-300 dark:border-gray-600"/>
              </div>
              <Button className="w-full">Registrarse</Button>
              <p className="text-xs text-center text-gray-300">
                Al registrarse, acepta nuestros{" "}
                <a href="#" className="underline">Términos de servicio</a> y{" "}
                <a href="#" className="underline">Política de privacidad</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}