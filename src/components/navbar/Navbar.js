import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Darkmode from '@/components/darkmode/Darkmode'

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <h4>MECEL</h4>
      <div className={styles.links}>
        <Darkmode />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <button className={styles.button}>Logout</button>
      </div>

    </div>
  )
}

export default Navbar
