import React from 'react'
import styles from "@/styles/Items.module.css"
function Items() {
  return (
    <div className={styles.container}
    
    >
        <div className={styles.up}>
            <img 
                src='/images/up.svg'
                alt='up'
                height="10px"
            />
        </div>
        <div className={styles.secondcontainer}>
            <p className={styles.title}>Food Centre</p>
            <p className={styles.title1}>Noodles <span className={styles.spaning}>Chinese</span></p>
        </div>
    </div>
  )
}

export default Items