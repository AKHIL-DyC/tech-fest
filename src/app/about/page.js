import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import mdl from '/public/mdl.png'
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.img}>
        <Image src={mdl}></Image>
      </div>
      <div className={styles.txt}>
        <p className={styles.disc}>In 2001, the students of Govt. Model Engineering College founded Excel, a techno-managerial festival like no other. The annually celebrated techfest has steadily hosted students from more than 2000 universities and 1000 institutions across the nation as it has grown exponentially over the years. Excel has always provided opportunities to students in ways they have only dreamt of, and everyone is invited to be a part of that journey to make this festival a grand success. Now, gearing up for its 23rd edition, Excel promises an celebration of technology that’s a bigger and brighter blast than ever.</p>
      </div>
    </div>
  )
}

export default About
