import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.talks}>
        <Link href="/events/shows">SHOWS</Link>
      </div>
      <div className={styles.talks}>
      <Link href="/events/competition">COMPETITION</Link>
      </div>
      <div className={styles.talks}>
      <Link href="/events/workshop">WORKSHOPS</Link>
      </div>
    </div>
  )
}

export default page
