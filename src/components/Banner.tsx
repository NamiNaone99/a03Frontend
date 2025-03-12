import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="/images/banner.jpg"
        alt="Event Venue"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.description}>
          ให้บริการสถานที่จัดเลี้ยงในบรรยากาศสุดพิเศษ
        </p>
      </div>
    </div>
  );
};

export default Banner;
