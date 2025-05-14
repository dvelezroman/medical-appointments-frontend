'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-background transition-colors duration-300 ease">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-8xl w-full px-4 flex h-16 items-center justify-end gap-2"
      >
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
      </motion.div>
    </header>
  );
}