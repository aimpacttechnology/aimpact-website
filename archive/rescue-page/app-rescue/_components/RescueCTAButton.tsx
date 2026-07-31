'use client'

import { ArrowRight } from 'lucide-react'

interface Props {
  label: string
  className?: string
}

export default function RescueCTAButton({ label, className }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent('rescue:open-checkout'))}
    >
      {label}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </button>
  )
}
