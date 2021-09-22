import styles from "../css/Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <small>&copy; 2021 YUDAI1995</small>
      </div>
    </footer>
  );
};