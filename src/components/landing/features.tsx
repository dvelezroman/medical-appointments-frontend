"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Users, ClipboardList, Bell, Shield, BarChart } from "lucide-react"

export default function Features() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const featureRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    })

    featureRefs.current.forEach((feature, index) => {
      gsap.from(feature, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: feature,
          start: "top 85%",
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Gestión de Citas",
      description: "Organice su agenda con un sistema intuitivo que evita conflictos y optimiza su tiempo.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Gestión de Pacientes",
      description: "Mantenga un registro completo de sus pacientes, historial médico y tratamientos.",
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: "Tratamientos",
      description: "Cree y gestione planes de tratamiento personalizados para cada paciente.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Recordatorios",
      description: "Envíe recordatorios automáticos a sus pacientes para reducir las ausencias.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Seguridad",
      description: "Protección de datos médicos con los más altos estándares de seguridad y cumplimiento.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Estadísticas",
      description: "Analice el rendimiento de su consulta con informes detallados y métricas clave.",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={titleRef} className="text-center space-y-4 mb-12 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Características diseñadas para profesionales médicos
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Herramientas que simplifican su trabajo diario y mejoran la experiencia de sus pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
