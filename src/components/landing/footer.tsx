'use client'
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {

  function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Email suscrito:", data.email);
  }

  return (
    <footer id="contact" className="bg-muted py-12 md:py-16">
      <div className="w-full max-w-[1375px] mx-auto container px-4 md:px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary">MediAgenda</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Simplificando la gestión médica para profesionales de la salud. Nuestra plataforma le permite enfocarse en
              lo más importante: sus pacientes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Sobre nosotros</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Carreras</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Prensa</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recursos</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Documentación</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Guías</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Soporte</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">API</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2"><Mail className="h-5 w-5 text-primary" /><span className="text-muted-foreground">contacto@mediagenda.ec</span></li>
              <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-primary" /><span className="text-muted-foreground">+593 2 600 1234</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-5 w-5 text-primary" /><span className="text-muted-foreground">Av. Amazonas y Naciones Unidas, Quito, Ecuador</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <h3 className="text-md font-semibold">Suscríbase a nuestro boletín</h3>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" name="email" placeholder="Correo electrónico" />
                <Button type="submit">Suscribirse</Button>
              </div>
            </form>
            <div className="text-xs text-muted-foreground md:text-right">
              <p>© {new Date().getFullYear()} Medi-Appointment. Todos los derechos reservados.</p>
              <div className="mt-1 space-x-4">
                <Link href="#" className="hover:underline">Términos de servicio</Link>
                <Link href="#" className="hover:underline">Política de privacidad</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}