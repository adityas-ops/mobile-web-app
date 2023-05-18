import styles from '@/styles/Share.module.css'

function Share() {
  return (
    <div className={styles.container}>
        <div className={styles.component}>
            <img
                src="/images/wifi.png"
                alt="share"
                className={styles.share}
                />
        </div>

    </div>
  )
}

export default Share