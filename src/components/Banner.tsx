import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1>Where every event finds its venue</h1>
        <p>ให้บริการสถานที่จัดเลี้ยงในบรรยากาศสุดพิเศษ</p>
      </div>
    </div>
  );
};

export default Banner;
