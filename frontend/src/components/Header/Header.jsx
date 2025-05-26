import styles from './Header.module.css';


function Header() {

  return (
    <header className={styles.header}>
       <div className={`${styles.container} ${styles.header_bar}`}>
            <p className={styles.logo_name}>AppName</p>
        </div>
        <div className={`${styles.container} ${styles.header_mid}`}>
            <h1>Welcome to AppName </h1>
            <p>A collection of over 200 resources for Developers and Designers, all in one place</p>
        </div>
        <div className={`${styles.container} ${styles.inputContainer}`}>
            <input
                type="text"
                placeholder="Search..."
                className={styles.search_bar}
            />
        </div>
    </header>
  );
}

export default Header;