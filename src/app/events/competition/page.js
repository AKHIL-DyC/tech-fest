"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import car from '/public/camera.avif'
import magic from '/public/hack.avif'
import marathon from '/public/robosoccer.png'
import show from '/public/foot.avif'
import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


export default function usePage() {

  const [ref, inView] = useInView({ threshold: 0.5 });
  const [springs, api] = useSpring(() => ({
    from: { y: -100 },
    opacity: 0,
  }))

  // Attach the onInView trigger
  if (inView) {
    api.start({ y: 0, opacity: 1 });
  }
  if (!inView) {
    api.start({ y: -100, opacity: 0 });
  }
  const [isvisible, setvisble] = useState(false);
  const toggle = () => {
    setvisble(!isvisible)
  }
  const [isvisible2, setvisble2] = useState(false);
  const toggle2 = () => {

    setvisble2(!isvisible2)
  }

  const [isvisible3, setvisble3] = useState(false);
  const toggle3 = () => {

    setvisble3(!isvisible3)
  }
  const [isvisible4, setvisble4] = useState(false);
  const toggle4 = () => {

    setvisble4(!isvisible4)
  }

  return (
    <div className={styles.mainContainer}>
      <animated.div className={styles.imgContainer} ref={ref} style={springsProps}>
        <div><Image src={car} className={styles.img} alt='competion' onClick={toggle}></Image></div>
        <div><Image src={magic} className={styles.img} alt='competion' onClick={toggle2}></Image></div>
        <div><Image src={marathon} className={styles.img} alt='competion' onClick={toggle3}></Image></div>
        <div><Image src={show} className={styles.img} alt='competion' onClick={toggle4}></Image></div>
      </animated.div>
      <div className={styles.textContainer} style={{ display: isvisible ? 'block' : 'none' }}  ><h1>PHOTOGRAPHY</h1><p>Colorful ambience, vibrant and festive atmosphere and a thousand faces that reveal a lot of emotions! Freeze moments with your captures. Mecel 20122 is a photographers dream, the opportunity to let your lens speak for you!
        Instant Photography, Mecel 2022s main photo-capturing competition, gives a platform for the photographer in you to shine. With Mecel spanning three days, let your creative side run wild and click pictures from a new perspective.</p></div>
      <div className={styles.textContainer} style={{ display: isvisible2 ? 'block' : 'none' }} ><h1>X CODING</h1><p>Grab your tools and get ready to fix code as you compete against other teams in a battle to twist and turn lines and turn back the clock.
        Take your teamwork to the next level as you work together to weave through levels that put your thinking to the test.</p></div>
      <div className={styles.textContainer} style={{ display: isvisible3 ? 'block' : 'none' }} ><h1>ROBOWAR</h1><p>Bring your robotic champions of power and agility to the ultimate showdown!
        In an exciting test of speed and control, it all comes down to the survival of the fittest - based off competitive sport fighting formats, the winner will be chosen after multiple elimination based one-on-one battles. Its time to find out- can your bot stand the test of strength, skill and time?


        Registration Fee - Rs 200</p></div>
      <div className={styles.textContainer} style={{ display: isvisible4 ? 'block' : 'none' }} ><h1>TIKI TAKA</h1><p>Conquer the world with a ball at your feet! Samba your way through the pitch, and feel the rush as you play against the best players in town in a 3v3 football match.
        Invoke the spirit of the GOATs and dribble your way through defences while playing killer passes and hitting suuis while bringing home the cup like Argentina.
        Its time to polish the boots, set your aim, and shoot for a chance at glory.
        Registration Fee - Rs 250</p></div>
    </div>

  )
}
