"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import car from '/public/carc.avif'
import magic from '/public/magic.avif'
import marathon from '/public/marathon.avif'
import show from '/public/showsc.avif'
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
      <div className={styles.imgContainer}ref={ref} style={springsPops}>
        <div><Image src={car} className={styles.img} alt='events ' onClick={toggle} ></Image></div>
        <div><Image src={magic} className={styles.img}  alt='events 'onClick={toggle2} ></Image></div>
        <div><Image src={marathon} className={styles.img} alt='events ' onClick={toggle3} ></Image></div>
        <div><Image src={show} className={styles.img} alt='events ' onClick={toggle4} ></Image></div>
        </div>
         <div className={styles.textContainer} style={{display:isvisible?'block':'none'}}  ><h1>MOSTRA D AUTO</h1><p>The auto expo is an event dedicated entirely to understand and appreciate the wonderful world of automobile engineering.
Conducted in collaboration with Top Gear MEC, the event aims to satisfy the dual aims of being entertaining and educational simultaneously. With a grand automobile exhibition, and a host of workshops such as engine display, chassis design and many more, this event truly promises to make the attendees appreciate the machines while also understand their inner workings</p></div>  
         <div className={styles.textContainer} style={{display:isvisible2?'block':'none'}} ><h1>UNMASKED</h1><p>Prepare to have your mind blown and your perceptions challenged with Unmasked - the ultimate magic and mentalism event! Excel 2022 is proud to present this years edition of Unmasked, featuring the incredible Fazil Basheer, renowned for his mesmerizing Tricksmania show.</p></div>  
         <div className={styles.textContainer} style={{display:isvisible3?'block':'none'}} ><h1>HEADSTART</h1><p>What mental health needs is more sunlight, more candor, and more unashamed conversations. Head Start, is a mini-marathon organised by Mecel23, in collaboration with Fortitude MEC, to spread awareness and reduce stigma around mental illnesses at Durbar Hall Ground on February 5.</p></div>  
         <div className={styles.textContainer} style={{display:isvisible4?'block':'none'}} ><h1>DJ AKHIL</h1>Open mic is an event presented by the non-tech team of Mecel where you are able to showcase your talents to the world and also. Bring your best jokes, your heartfelt lyrics, or your mind-bending poetry, and get ready to captivate the crowd.<p>

</p></div>  
      </div>   
  
  )
}


