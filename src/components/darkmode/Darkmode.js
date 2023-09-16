"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React ,{useContext}from 'react'
import styles from './page.module.css'

const Darkmode = () => {
  const {toggle,mode} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.moon}>🌙</div>
        <div className={styles.sun}>☀️</div>
        <div className={styles.ball}
          style={mode==='light'? {left:'2px'}:{right:'2px'}}
        ></div>
      
    </div>
  )
}

export default Darkmode
