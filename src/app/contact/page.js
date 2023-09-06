import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import conta from '/public/contact2.jpg'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.txt}>Wanna Keep in Touch ? </h1>
      <div className={styles.content}>

        <Image src={conta} className={styles.img}></Image>

        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="email" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea}
            placeholder='message'
            cols="30"
            rows="10"></textarea>
            <button className={styles.button}>Send</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
