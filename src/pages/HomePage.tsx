import NavBar from "../components/NavBar/NavBar";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={`${styles.homePage} container`} data-type="wide">
      <NavBar className={styles.header} />
      <aside className={styles.aside}>
        <h1>Aside</h1>
      </aside>
      <main className={styles.main}>
        <h1>Main</h1>
      </main>
    </div>
  );
}
