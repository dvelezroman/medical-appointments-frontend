import RegisterForm from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </main>
  )
}