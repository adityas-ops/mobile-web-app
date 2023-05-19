import React from "react";
import styles from "@/styles/Items.module.css";

const noddle = [
  {
    id: 1,
    name: "dandan Noddles",
    image: "/images/noddles/dandan.png",
  },
  {
    id: 2,
    name: "Chow Mien",
    image: "/images/noddles/chow.png",
  },
  {
    id: 3,
    name: "Lo Mien",
    image: "/images/noddles/lo.png",
  },
];

const Biryani = [
    {
        id: 1,
        name: "Hyderabadi",
        image: "/images/biryani/hydrabadi.png",
    },
    {
        id: 2,
        name: "Lucknowi",
        image: "/images/biryani/lucknawi.png",
    },
    {
        id: 3,
        name: "Kolkata",
        image: "/images/biryani/kolkata.png",
    },
]

function Items() {
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <img src="/images/up.svg" alt="up" height="10px" />
      </div>
      <div className={styles.secondcontainer}>
        <p className={styles.title}>Food Centre</p>
        <p className={styles.title1}>
          Noodles <span className={styles.spaning}>Chinese</span>
        </p>
        {/* griding start */}
        <div className={styles.grid}>
          {noddle.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardContent1}>
                <img
                  src={item.image}
                  alt={item.name}
                  // height="100px"
                  className={styles.noddle}
                />
                <div className={styles.textAli}>
                  <p className={styles.name}>{item.name}</p>
                  <div className={styles.min}>
                    <div className={styles.points}>{""}</div>
                    <span className={styles.mins}> 10 min</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardContent2}>
                <p className={styles.chips}>
                  75 Kcal
                  <br />
                </p>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          ))}
        </div>
        {/* griding end */}
        <p className={styles.title1}>
          Biryani <span className={styles.spaning}>Indians</span>
        </p>
        <div className={styles.grid}>
          {Biryani.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardContent1}>
                <img
                  src={item.image}
                  alt={item.name}
                  // height="100px"
                  className={styles.noddle}
                />
                <div className={styles.textAli}>
                  <p className={styles.name}>{item.name}</p>
                  <div className={styles.min}>
                    <div className={styles.points}>{""}</div>
                    <span className={styles.mins}> 10 min</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardContent2}>
                <p className={styles.chips}>
                  75 Kcal
                  <br />
                </p>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          ))}
        </div>
        {/* griding end */}
        <p className={styles.coupon}>
            Meals Coupon
        </p>
      </div>
     
    </div>
  );
}

export default Items;
