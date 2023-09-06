import Image from 'next/image'
import styles from './page.module.css'
import pic from 'public/bg2.jpg'
export default function Home() {
  return (
   <div className={styles.mContainer}>
    <div className={styles.items}>
      <h1 className={styles.title}>MECEL 2023</h1>
      <p className={styles.disc}>Get ready to unleash the future! Join us at Model Engineering College's Tech Fest 2023 for a thrilling journey into the digital cosmos. Innovation, excitement, and electrifying ideas await. Let's code the future together!"</p>
   </div>
   <div className={styles.items}>
   <Image src={pic} className={styles.img}></Image>
   </div>
   </div>
  )
}
