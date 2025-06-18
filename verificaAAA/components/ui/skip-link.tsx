import * as React from "react"
import { cn } from "@/lib/utils"

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4",
        "bg-white px-4 py-2 rounded-md shadow-lg",
        "text-gray-900 font-medium",
        "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "z-50"
      )}
    >
      Pular para o conteúdo principal
    </a>
  )
} 