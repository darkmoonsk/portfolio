import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
                <h1>Bruno Souza</h1>

                <ul className={styles.menu}>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>Sobre</li></a>
                    <li>Projetos</li>
                </ul>
        </header>
    );
}

export default Header;
