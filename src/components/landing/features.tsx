import { Calendar, Users, ClipboardList, Bell, Shield, BarChart } from "lucide-react"

export default function Features() {
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
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12 mx-auto">
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