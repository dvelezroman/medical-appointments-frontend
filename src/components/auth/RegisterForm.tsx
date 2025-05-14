'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email({ message: 'Correo inválido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
})

type RegisterFormValues = z.infer<typeof formSchema>

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true)
    toast.success('Registro exitoso', { description: `Bienvenido, ${values.email}` })
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-xl border border-gray-200 shadow-md dark:shadow-none dark:border-gray-700 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Crear Cuenta</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-300">Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="correo@ejemplo.com" {...field} className="border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                  </FormControl>
                  <FormMessage className="text-xs min-h-[20px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-300">Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs min-h-[20px]" />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} type="submit" className="w-full mt-6 py-5 bg-primary text-primary-foreground hover:bg-primary/90">
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </form>
        </Form>
      </CardContent>
     <CardFooter className="text-xs mx-auto text-center dark:text-gray-400">
        ¿Ya tienes una cuenta?
        <Link href="/auth/login" className="text-primary ml-1 hover:underline">
            Inicia sesión
        </Link>
     </CardFooter>
    </Card>
  )
}