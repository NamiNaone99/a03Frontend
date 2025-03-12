import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/images/card.jpg" alt="Event Venue" className={styles.image} />
      <div className={styles.text}>
        <h2 className={styles.title}>จัดงานเลี้ยงสุดพิเศษ</h2>
        <p className={styles.description}>
          สถานที่ที่สมบูรณ์แบบสำหรับงานแต่งงาน งานสัมมนา และปาร์ตี้
        </p>
      </div>
    </div>
  );
};

export default Card;
