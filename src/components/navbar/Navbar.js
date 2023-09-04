import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/events">events</Link>
    </div>
  )
}

export default Navbar
