import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.footer}>
     <div> @2023 AKHIL-DyC</div>
      <div className={styles.imageContainer}>
      <Link href='https://www.linkedin.com/in/akhil-i-a-387307256/'target='_blank'><Image src="/linkedin.png"
      width={30}
      height={30}
      alt="linkedin">
      </Image>
      </Link>
      <Link href='https://www.instagram.com/akhil_ia/' target='_blank'>
      <Image src="/instagram.png"
       width={30}
       height={30}
      alt="akhil_ia">
      </Image>
      </Link>

      <Link href='https://twitter.com/Akhil_Dyc'target='_blank'>
      <Image src="/twitter.png"
       width={30}
       height={30}
      alt="alone">
      </Image>
      </Link>

      <Link href='https://github.com/AKHIL-DyC'target='_blank'>
      <Image src="/periscope.png"
       width={30}
       height={30}
      alt="Mec">
      </Image>
      </Link>
      </div>
    </div>
  )
}

export default Footer
