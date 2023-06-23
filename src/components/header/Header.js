import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles["social-container"]}>
                    <h3>Olá, eu sou Bruno Souza</h3>
                    <a href="https://www.linkedin.com/in/brunosouzadkm/" target="_blanc"><img src="./images/linkedin.svg" alt="Icone do linkedin" /></a>
                    <a href="https://github.com/darkmoonsk" target="_blanc"><img src="./images/github.svg" alt="Icone do github" /></a>
                    <img src="./images/curriculo.svg" alt="Icone do download do curriculo" /> 
                </div>
                <h1>Desenvolvedor Fullstack</h1>
                <p>Tenho 26 anos e sou Engenheiro de Software com 2 anos de experiencia trabalhando como freelancer em Desenvolvimento de Games e com Front-end na Alura Latam</p>
                <div className={styles.skills}>
                    <h2>Minhas Habilidades:</h2>
                    <div className={styles["skills-container"]}>
                        <img src="./images/react.svg" alt="Icone do react" />
                        <img src="./images/nodejs.svg" alt="Icone do node" />
                        <img src="./images/javascript.svg" alt="Icone do javascript" />
                        <img src="./images/typescript.svg" alt="Icone do typescript" />
                        <img src="./images/html.svg" alt="Icone do html" />
                        <img src="./images/css.svg" alt="Icone do css" />
                        <img src="./images/sass.svg" alt="Icone do sass" /> 
                        <img src="./images/tailwind-css.svg" alt="Icone do tailwind" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
