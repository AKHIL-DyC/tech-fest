import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   <div className='home'>
    <Image src="/bg.jpg"
    layout='fill'
    alt="bg">

    </Image>
   </div>
  )
}
