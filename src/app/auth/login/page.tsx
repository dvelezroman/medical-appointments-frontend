import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </main>
  )
}