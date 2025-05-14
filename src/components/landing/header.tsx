import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-background transition-colors duration-300 ease">
      <div className="mx-auto max-w-8xl w-full px-4 flex h-16 items-center justify-end gap-2">
        <Link href="/auth/register">
          <Button
            className="px-3 py-2 text-sm sm:px-6 sm:py-2 sm:text-md"
            variant="secondary"
          >
            Registrarse
          </Button>
        </Link>
        {/* <Link href="/auth/login">
          <Button
            className="px-3 py-2 text-sm sm:px-6 sm:py-2 sm:text-md"
            variant="default"
          >
            Iniciar Sesión
          </Button>
        </Link> */}
        <ModeToggle />
      </div>
    </header>
  );
}