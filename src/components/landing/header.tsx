"use client"

import { ModeToggle } from "./mode-toggle"

export default function Header() {

  return (
    <header className="top-0 z-50 w-full bg-background">
      <div className="mx-auto max-w-8xl w-full px-4 flex h-16 items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  )
}