'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
    >
      <Printer className="w-4 h-4" />
      Print / Save as PDF
    </button>
  )
}
