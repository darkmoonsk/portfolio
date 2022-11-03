import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img alt="imagem do autor" src="./images/bruno.jpeg"/>
                <h1>@Bruno Souza</h1>
            </div>

            <ul className={styles.menu}>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/about">
                    <li>Sobre</li>
                </a>
                <a href="/projects">
                    <li>Projetos</li>
                </a>
            </ul>
        </header>
    );
}

export default Header;
