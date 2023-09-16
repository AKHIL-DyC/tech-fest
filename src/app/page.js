"use client"
import Image from 'next/image'
import styles from './page.module.css'
import pic from 'public/bg2.jpg'
import { useSpring,animated, easings } from '@react-spring/web'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function useHome() {
  const {mode} =useContext(ThemeContext)
  const springsh = useSpring({
    delay:0,
    from: { x: -10000 },
    to: { x: 0 },

  })

  const springsp = useSpring({
    duration:30,
    from: { y: 10000 },
    to: { y: 0 },
   
  })
  return (
    
   <div className={styles.mContainer}>
    <div className={styles.items}>
      <animated.h1 className={styles.title}style={{...springsh}}>MECEL 2023</animated.h1>
      <animated.p className={styles.disc} style={{...springsp}}>Get ready to unleash the future! Join us at Model Engineering College's Tech Fest 2023 for a thrilling journey into the digital cosmos. Innovation, excitement, and electrifying ideas await. Let's code the future together!"</animated.p>
   </div>
   <div className={styles.items}>
   <Image src={pic} className={styles.img} alt="college"
   style={mode==="light"&&{filter:"invert(100%)"}}></Image>
   </div>
   </div>
  )
}
