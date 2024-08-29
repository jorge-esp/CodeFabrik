import { SETTINGS } from '@/lib/constants'
import React from 'react'

function Footer() {
  return (
    <footer className='text-center text-sm text-slate-500'>© {new Date().getFullYear()} {SETTINGS.NAME}. All rights reserved.</footer>
  )
}

export default Footer