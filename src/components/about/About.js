import styles from "./About.module.css";

function About() {
    return (
        <main className={styles.about}>
            <div className={styles.container}>
                <h1>Sobre mim:</h1>
                <div className={styles.content}>
                    <p>
                        Atualmente, trabalho como estagiário scuba front-end na Alura
                        Latam. Estudo Desenvolvimento Web, com ênfase em Front-end, e
                        também me dedico ao Back-end, com o objetivo de me tornar um
                        desenvolvedor Full-stack.
                    </p>
                    <p>
                        Trabalhei 1 ano como freelancer em Desenvolvimento de Games com
                        GameMaker, criando diversos sistemas, como por exemplo:
                        Inventário, Diálogos, Batalha, Loja, Missões, Save e Loading,
                        Animações e IA.
                    </p>  
                    <p>
                        Curso Engenharia de Software no Centro Universitário Anhanguera
                        Pitágoras Ampli, além de estudar por conta própria Astronomia.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default About;
