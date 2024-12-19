import { Brain } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navigationbar() {
  return (

    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-6 w-6 mr-2" />
        <span className="font-bold">LearningLens AI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Contact">
          Contact
        </Link>
      </nav>
    </header>

  )
}

export default Navigationbar