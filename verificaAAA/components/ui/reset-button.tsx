"use client"

import { Button } from "@/components/ui/button"
import { resetPageCheckboxes } from "@/lib/utils/checkbox-reset"
import { RefreshCw } from "lucide-react"

export function ResetButton() {
  return (
    <div className="flex justify-center mb-8">
      <Button
        onClick={resetPageCheckboxes}
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Desmarcar todas as CheckBoxes
      </Button>
    </div>
  )
} 