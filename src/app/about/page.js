"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import mdl from '/public/mdl.png'
import e15 from '/public/excel2015.png'
import e16 from '/public/excel2016.png'
import e17 from '/public/excel2017.png'
import e19 from '/public/excel2019.png'
import e21 from '/public/excel2021.png'
import e22 from '/public/excel2022.svg'
import { useInView, animated } from '@react-spring/web'



export default function About() {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }))
    const [refi, springsi] = useInView(
      () => ({
        from: {
          opacity: 0,
          x: 100,
        },
        to: {
          opacity: 1,
          x: 0,
        },
      }))

  return (
    <div className={styles.about}>
      <animated.div className={styles.img} ref={ref} style={springs}>
        <Image src={mdl}></Image>
        </animated.div>
        <div className={styles.txt}>
        <p className={styles.disc}>In 2001, the students of Govt. Model Engineering College founded Mecel, a techno-managerial festival like no other. The annually celebrated techfest has steadily hosted students from more than 2000 universities and 1000 institutions across the nation as it has grown exponentially over the years. Mecel has always provided opportunities to students in ways they have only dreamt of, and everyone is invited to be a part of that journey to make this festival a grand success. Now, gearing up for its 23rd edition, Mecel promises an celebration of technology that’s a bigger and brighter blast than ever.</p>
        </div>
        <div className={styles.excel}>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e15} className={styles.imgs} alt="excel"></Image></animated.div>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e16} className={styles.imgs} alt="excel"></Image></animated.div>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e17} className={styles.imgs} alt="excel"></Image></animated.div>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e19} className={styles.imgs} alt="excel"></Image></animated.div>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e21} className={styles.imgs} alt="excel"></Image></animated.div>
            <animated.div className={styles.imageContainer} ref={refi} style={springsi}><Image src={e22} className={styles.imgs} alt="excel"></Image></animated.div>
        </div>
    </div>
  )
}


