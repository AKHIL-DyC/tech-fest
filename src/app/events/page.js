"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import car from '/public/carc.avif'
import marathon from '/public/marathon.avif'
import music from '/public/showsc.avif'
import coding from '/public/hack.avif'
import robo from '/public/robo.webp'
import foot from '/public/foot.avif'
import pcb from '/public/pcb.jpg'
import ar from 'public/ardev.jpg'
import web3 from 'public/web3.jpg'
export default function usePage(){
  const [ref, inView] = useInView({threshold:0.5});
  const [springs, api] = useSpring(() => ({
    from: { x: -100},
    opacity:0,
  }));

  // Attach the onInView trigger
  if (inView) {
    api.start({ x: 0 ,opacity:1});
  }
  if (!inView) {
    api.start({ x: -100 ,opacity:0});
  }
  const [ref2, inView2] = useInView({threshold:0.5});
  const [springs2, api2] = useSpring(() => ({
    from: { x: -100},
    opacity:0,
  }));

  // Attach the onInView trigger
  if (inView2) {
    api2.start({ x: 0 ,opacity:1});
  }
  if (!inView2) {
    api2.start({ x: -100 ,opacity:0});
  }

  const [ref3, inView3] = useInView({threshold:0.5});
  const [springs3, api3] = useSpring(() => ({
    from: { x: -100},
    opacity:0,
  }));

  // Attach the onInView trigger
  if (inView3) {
    api3.start({ x: 0 ,opacity:1});
  }
  if (!inView3) {
    api3.start({ x: 100 ,opacity:0});
  }
  return (
   <> 
      
      <animated.div className={styles.first} ref={ref} style={{...springs}}>
      <Link href="/events/shows">
        <div className={styles.talks}>
        <p>EVENTS</p>
        </div>
          <div className={styles.imgContainer}>
          <Image src={car} alt='car'className={styles.img}></Image>
          <Image src ={marathon}alt='marathon'className={styles.img}></Image>
          <Image src ={music}alt='concert'className={styles.img}></Image>
      </div>
      </Link>
      </animated.div> 

      <animated.div className={styles.second}ref={ref2} style={{...springs2}}>
      <Link href="/events/competition">
      <div className={styles.talks}>
      <p>COMPETITION</p>
      </div>
      <div className={styles.imgContainer}>
        <Image src={coding} alt='coding' className={styles.img}></Image>
        <Image src={robo} alt='robowar' className={styles.img}></Image>
        <Image src={foot} alt='football' className={styles.img}></Image>
      </div>
      </Link>
      </animated.div>

      <animated.div className={styles.third}ref={ref3} style={{...springs3}}>
      <Link href="/events/workshop">
      <div className={styles.talks}>
      <p> WORKSHOPS</p>
      </div>
      <div className={styles.imgContainer}>
        <Image src={pcb} alt='coding' className={styles.img}></Image>
        <Image src={ar} alt='robowar' className={styles.img}></Image>
        <Image src={web3} alt='football' className={styles.img}></Image>
      </div>
      </Link>
      </animated.div>
    </>
  )
}
