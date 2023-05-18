import React from 'react'
import styles from '@/styles/Owner.module.css'

function Owner() {
  return (
    <div className={styles.container}>
    <div className={styles.secondcontainer}>
        <img
            src="/images/bhardwaj.png"
            alt="Owner"
            className={styles.image}
        />
        <div className={styles.main}>
            <div className={styles.title} >
                Bhardwaj centre
            </div>
            <div className={styles.desc}>
                Food Influencer
            </div>
        </div>
        </div>
    </div>
  )
}

export default Owner