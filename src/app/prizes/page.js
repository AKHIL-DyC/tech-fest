import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
async function useGetData(){
  const res =await fetch('https://dummyjson.com/products')

if(!res.ok){
  throw Error('failed to get data')
}
const data=await res.json()
return data.products;
}



const Page = async() => {
  const data=await useGetData()
  return (
    <>
    {data.map((products)=>(
      <div key={products.id}className={styles.mainContainer}>
        <Image src={products.thumbnail} className={styles.img} width={600}height={600} alt="prizes"></Image>
        <div className={styles.textContainer}>
        <h1>{products.description}</h1>
        </div>
        
      </div>
    ))}
    </>
  )
}

export default Page

