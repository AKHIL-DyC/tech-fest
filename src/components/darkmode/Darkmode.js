import React from 'react'
import styles from './page.module.css'

const darkmode = () => {
  return (
    <div className={styles.container}>
        <div className={styles.moon}>🌙</div>
        <div className={styles.sun}>☀️</div>
        <div className={styles.ball}></div>
      
    </div>
  )
}

export default darkmode
