import React from 'react'
import styles from "@/styles/Coupon.module.css"

const coupon = [
    {
        id: 1,
        title: "Chinese",
    },
    {
        id: 2,
        title: "Indian",
    },
    {
        id: 3,
        title: "Korian",
    }
]

function Coupon() {
  return (
    <div 
        className={styles.container}
    >
        <div >{""}</div>
        <div>
        <p className={styles.specialT}>27th Jan - 18th Feb</p>
        <span className={styles.specialTT}>UPTO 25% OFF</span>
        </div>
        {
            coupon.map((item) => (
                <div key={item.id}>
                   <div className={styles.mainCard}>
                   <p className={styles.cardT}>{item.title}</p>
                    <span className={styles.cardTT}>₹ 299/-</span>
                    <div className={styles.rate}>
                        <img
                            src="/images/rate.png"
                            alt="rate"
                            className={styles.rateI}
                        />
                        <span className={styles.rateT}>22% + 30% off - Expires in 1h</span>
                    </div>
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default Coupon