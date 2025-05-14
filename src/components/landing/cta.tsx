import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimice su consulta médica hoy mismo
            </h2>
            <p className="md:text-xl">
              Únase a miles de profesionales médicos que ya han transformado la gestión de sus consultas con MediAgenda.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>✅ Acceso inmediato al panel de pacientes</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅ Configuración rápida de tu primera agenda médica</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅ Asistencia personalizada para digitalizar tu consulta</span>
              </li>
            </ul>
          </div>
          <div className="bg-background text-foreground rounded-lg p-6 shadow-lg mx-auto">
            <h3 className="text-xl font-bold mb-4">Comience su prueba gratuita</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">Nombre</label>
                  <Input id="first-name" placeholder="Ingrese su nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Apellido</label>
                  <Input id="last-name" placeholder="Ingrese su apellido" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
                <Input id="email" type="email" placeholder="nombre@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="specialty" className="text-sm font-medium">Especialidad médica</label>
                <Input id="specialty" placeholder="Ej: Cardiología, Pediatría, etc." />
              </div>
              <Button className="w-full">Registrarse</Button>
              <p className="text-xs text-center text-muted-foreground">
                Al registrarse, acepta nuestros{" "}
                <a href="#" className="underline">Términos de servicio</a> y{" "}
                <a href="#" className="underline">Política de privacidad</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}