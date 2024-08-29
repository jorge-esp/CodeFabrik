import React from 'react'
import { ModeToggle } from './ModeToggle'
import { NAV_LINKS, SETTINGS } from '@/lib/constants'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex items-center p-6 justify-between">
      <h1 className='text-2xl'><Link href={'/'}>{SETTINGS.NAME}</Link></h1>
      <div className='mr-2'>
        {NAV_LINKS.map((link) => (
          <Link className='p-2' href={link.href} key={link.name}>{link.name}</Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  )
}

export default Navbar