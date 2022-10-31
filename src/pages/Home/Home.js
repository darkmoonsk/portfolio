import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <img alt="Um laptop" src="./images/laptop.png" />
                <div className={styles.about}>
                    <p>
                        <b>Olá</b>, meu nome é Bruno, eu sou Engenheiro de
                        Software com foco atual no front-end, também tenho
                        experiencia com desenvolvimento de games. Desde pequeno
                        sou apaixonado por tecnologia e aos 12 anos comecei a me
                        apaixonar pela programação.
                    </p>
                    <p>
                        Busco desafios para sempre estar em evolução, amo
                        aprender coisas novas. Atualmente estou cursando Engenharia de Software
                        e estudando <em>Javascript</em> e <em>React</em>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
