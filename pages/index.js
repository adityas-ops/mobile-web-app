import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Share from '@/components/Share'
import Owner from '@/components/Owner'
import Items from '@/components/Items'
import Coupon from '@/components/Coupon'

export default function Home() {

  return (
    <>
    <div className={styles.back}>
    <img
      src="/images/intro.png"
      alt="Picture of the author"
      className={styles.img}
      />
    </div>
    <div className={styles.allcontent}>
     <Share/>
     <Owner/>
      <Items/>
      <div
      className={styles.coupon}
      ><Coupon/></div>
      
      <div className={styles.buttonBack}>
      <button
      className={styles.button}
      >
        Order Now
      </button>
      </div>
    </div>
    </>
  )
}
