import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.name}>Mohammad Hasibul Hasan</h1>
      <button className={styles.btn}>Click here Header</button>
    </div>
  );
};

export default Header;