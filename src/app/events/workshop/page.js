"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import car from '/public/ardev.jpg'
import magic from '/public/hack.avif'
import marathon from '/public/pcb.jpg'
import show from '/public/web3.jpg'
import bg from 'public/bg.jpg'
import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


export default function usePage(id){
  const [ref, inView] = useInView({threshold:0.5});
  const [springs, api] = useSpring(() => ({
    from: { y: -100},
    opacity:0,
  }));

  // Attach the onInView trigger
  if (inView) {
    api.start({ y: 0 ,opacity:1});
  }
  if (!inView) {
    api.start({ y: -100 ,opacity:0});
  }

const[isvisible,setvisble]= useState(false);
const toggle=()=>{
    setvisble(!isvisible)
}
const[isvisible2,setvisble2]= useState(false);
const toggle2=()=>{

    setvisble2(!isvisible2)
}

const[isvisible3,setvisble3]= useState(false);
const toggle3=()=>{

    setvisble3(!isvisible3)
}
const[isvisible4,setvisble4]= useState(false);
const toggle4=()=>{

    setvisble4(!isvisible4)
}
const togglem=()=>{
  setvisble(!isvisible)
  setvisble2(!isvisible2)
  setvisble3(!isvisible3)
  setvisble4(!isvisible4)

}

  return (
    <div className={styles.mainContainer}> 
      <div className={styles.imgContainer}ref={ref} style={...springs}>
        <div><Image src={car} className={styles.img} alt='workshop' onClick={toggle}></Image></div>
        <div><Image src={magic} className={styles.img} alt='workshop' onClick={toggle2}></Image></div>
        <div><Image src={marathon} className={styles.img} alt='workshop' onClick={toggle3}></Image></div>
        <div><Image src={show} className={styles.img} alt='workshop' onClick={toggle4}></Image></div>
        </div>
         <div className={styles.textContainer} style={{display:isvisible?'block':'none'}}  ><h1>AR Development</h1><p>With the onset of enhanced technologies, augmented reality has rooted itself deep within the gaming world, Pokémon Go being a perfect consequence for the same. Be it first-person shooter or fantasy, every game is awesome! There is an exuberant gamer residing within all of us and have you ever dreamt of designing your own customized game consisting of ideating, running trials and going beyond the ordinary, and exploring new frontiers?</p></div>  
         <div className={styles.textContainer} style={{display:isvisible2?'block':'none'}} ><h1>Cyber Security</h1><p>Join the fight, and be a part of the effort to reduce security risks and fight cybercrime with BufferEvents, as they conduct a series of workshops.
The classes will discuss a lot of relevant topics and appeal to those who are passionate about cyber Technology and cyber security.
The topics you will get to explore through the course of this workshop are:
Hacking
DOS attack
Phishing, Spamming and Spoofing
Ransomware
SQL Injection
Cryptography
Sample CTF


Registration Fee - Rs 300</p></div>  
         <div className={styles.textContainer} style={{display:isvisible3?'block':'none'}} ><h1>PCB Design</h1><p>Electronics Engineering is hardware, timing diagrams and algorithms..... Printed Circuit Boards are an essential part of electronics.Not only do they ease prototyping, they enhance the reliability of the products. The bread boarding techniques do not quite work if the number of connections increase substantially. Hence even for Hobby users PCB design is becoming essential. Also with smaller packaging sizes for Integrated circuits it is almost impossible to prototype on Breadboard. PCB designing can be very joyful, and intricate. They say it is more of an art than science. Lots of scope for the designer. So Let's build a few of them. The Classes will discuss autorouting and manual routing and how to order pcb from jlcpcb in EsayEDA Software.
They will also be taught about creating footprints and symbols manually and through symbol wizard techniques .
Circuit design using software tools
PCB fabrication as per design input
Testing PCB after loading components


Registration Fee - Rs 450</p></div>  
         <div className={styles.textContainer} style={{display:isvisible4?'block':'none'}} ><h1>WEB 3</h1><p>Imagine a new kind of Internet that accurately translates what you type and understands what you say, whether through text, voice, or other media, and where all of the content you consume is more personalized than ever before. In the evolution of the Internet, you are about to enter a new era. Web 3.0.
The topics you will get to explore through the course of this workshop are:
Introduction to web 3.0
Basic elements of web 3.0
Website apps & Cloud Computing
Ubiquity
Decentralisation
Artificial intelligence
Blockchain
Connectivity
Meta & NFT


Registration Fee - Rs 350

</p></div>  
      </div>   
  
  )
}