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

type LoginFormValues = z.infer<typeof formSchema>

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true)
    toast.success('Login exitoso', { description: `Bienvenido, ${values.email}` })
    setIsLoading(false)
  }

  return (
    <Card className="border border-gray-200 dark:shadow-none dark:border-gray-700 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
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
                    <Input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      {...field}
                      className="border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
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
                        className="border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white pr-10 placeholder:text-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
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
              {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-xs text-center mx-auto dark:text-gray-400">
        ¿No tienes una cuenta?
        <Link href="/auth/register" className="text-primary ml-1 hover:underline">
          Regístrate
        </Link>
      </CardFooter>
    </Card>
  )
}