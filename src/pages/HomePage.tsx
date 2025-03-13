import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Nav</h1>
      </header>
      <aside className={styles.aside}>
        <h1>Aside</h1>
      </aside>
      <main className={styles.main}>
        <h1>Main</h1>
      </main>
    </div>
  );
}
