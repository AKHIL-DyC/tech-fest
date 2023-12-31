"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Darkmode from '@/components/darkmode/Darkmode'
import { signIn,signOut,useSession } from 'next-auth/react'

export default function useNavbar(){
 const {data:session}=useSession();
 if(session){
  return (
    <div className={styles.navbar}>
   <div className={styles.mecel}> <Link href='https://akhil-mec.vercel.app'target='_blank'>MECEL</Link></div>
  
      
      <div className={styles.links}>
        <Darkmode />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href='/events'>Events</Link>
        <Link href="/prizes">Prizes</Link>
        <Link href='/contact'>Contact</Link>
        <button className={styles.button} onClick={()=>signOut()}>{session?.user?.name}</button>
      </div>

    </div>
    
  )
 }
 return(
 <div className={styles.navbar}>
 <h4>MECEL</h4>
 
 <div className={styles.links}>
   <Darkmode />
   <Link href="/">Home</Link>
   <Link href="/about">About</Link>
   <Link href='/events'>Events</Link>
   <Link href="/prizes">Prizes</Link>
   <Link href='/contact'>Contact</Link>
   <button className={styles.button} onClick={()=>signIn()}>Sign in</button>
 </div>

</div>
 )
}



