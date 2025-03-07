import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo}>UNIPI</a>
      <div className={styles.navitem}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Account</a>
      </div>
      <div>LOGO</div>
    </nav>
  );
}
