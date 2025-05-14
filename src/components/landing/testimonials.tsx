"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MediAgenda ha transformado completamente la gestión de mi consulta. Ahora puedo dedicar más tiempo a mis pacientes y menos a tareas administrativas.",
      name: "Dra. María Rodríguez",
      title: "Cardióloga",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "La facilidad para gestionar citas y el sistema de recordatorios ha reducido las ausencias en mi consulta en más de un 40%. Una herramienta indispensable.",
      name: "Dr. Carlos Méndez",
      title: "Pediatra",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "El seguimiento de tratamientos y la gestión de historiales clínicos nunca había sido tan sencilla. Recomiendo MediAgenda a todos mis colegas.",
      name: "Dra. Laura Sánchez",
      title: "Dermatóloga",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote: "La interfaz intuitiva y el soporte técnico excepcional hacen que MediAgenda destaque entre otras plataformas similares que he probado.",
      name: "Dr. Javier Morales",
      title: "Traumatólogo",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Profesionales médicos que han mejorado la gestión de sus consultas con MediAgenda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex-grow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-primary/40 mb-2"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                        <p className="text-muted-foreground">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}