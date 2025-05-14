'use client'

import { Calendar, Users, ClipboardList, Bell, Shield, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Gestión de Citas",
      description: "Organice su agenda con un sistema intuitivo que evita conflictos y optimiza su tiempo.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Gestión de Pacientes",
      description: "Mantenga un registro completo de sus pacientes, historial médico y tratamientos.",
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "Tratamientos",
      description: "Cree y gestione planes de tratamiento personalizados para cada paciente.",
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Recordatorios",
      description: "Envíe recordatorios automáticos a sus pacientes para reducir las ausencias.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Seguridad",
      description: "Protección de datos médicos con los más altos estándares de seguridad y cumplimiento.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Estadísticas",
      description: "Analice el rendimiento de su consulta con informes detallados y métricas clave.",
    },
  ]

  return (
    <section id="features" className="py-10 sm:py-20 bg-muted/50 transition-colors duration-300 ease">
      <div className="w-full max-w-[1375px] container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Características diseñadas para profesionales médicos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-lg"
          >
            Herramientas que simplifican su trabajo diario y mejoran la experiencia de sus pacientes
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg p-5 md:p-6 shadow-md border border-white/10 bg-white/10 backdrop-blur-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-md font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-md">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}