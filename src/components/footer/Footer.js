import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.footer}>
     <div> @2023 AKHIL-DyC</div>
      <div className={styles.imageContainer}>
      <Image src="/linkedin.png"
      width={30}
      height={30}
      alt="linkedin">
      </Image>
      <Image src="/instagram.png"
       width={30}
       height={30}
      alt="akhil_ia">
      </Image>
      <Image src="/twitter.png"
       width={30}
       height={30}
      alt="alone">
      </Image>
      <Image src="/periscope.png"
       width={30}
       height={30}
      alt="Mec">
      </Image>
      </div>
    </div>
  )
}

export default Footer
