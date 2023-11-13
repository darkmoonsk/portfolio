import styles from "./About.module.css";

function About() {
    return (
        <main className={styles.about}>
            <div className={styles.container}>
                <h1>Sobre mim:</h1>
                <div className={styles.content}>
                    <p>
                        <span className={styles.quote}>"</span>Como Engenheiro de Software FullStack especializado em
                        JavaScript, React, Node.js e TypeScript, minha jornada é
                        impulsionada por uma intensa curiosidade e uma dedicação
                        ao mundo do desenvolvimento de software e ciência. Minha
                        paixão pela tecnologia começou com o desenvolvimento de
                        jogos, um campo no qual me aventurei profundamente como
                        freelancer, trabalhando em projetos inovadores de jogos
                        indie.
                    </p>
                    <p>
                        Minhas contribuições nesses projetos abrangem desde a
                        criação de sistemas de inteligência artificial avançados
                        até a geração de mapas procedurais e o desenvolvimento
                        de interfaces intuitivas, utilizando uma variedade de
                        plataformas e linguagens, como Java, Game Maker e Godot.
                    </p>
                    <p>
                        Este portfólio é uma vitrine do meu compromisso com a
                        excelência e da minha aspiração em ser uma referência
                        técnica no mundo da programação. Aqui, você encontrará
                        uma seleção dos meus trabalhos mais significativos, cada
                        um refletindo meu contínuo aprendizado e aprimoramento
                        em tecnologias emergentes, bem como o desenvolvimento
                        das minhas habilidades interpessoais. Meu objetivo é não
                        apenas evoluir como profissional, mas também inspirar e
                        contribuir para a comunidade através do compartilhamento
                        de conhecimentos, experiências e inovações.
                    </p>
                    <p>
                        Fora do desenvolvimento tradicional, mantenho uma paixão
                        viva por Astronomia e Inteligência Artificial, áreas nas
                        quais invisto tempo em pesquisa e colaboração, sempre
                        buscando expandir e compartilhar conhecimento. Para uma
                        visão mais ampla do meu trabalho, visite meus projetos
                        no GitHub:
                        <br/>
                        <a
                            href="https://github.com/darkmoonsk/"
                            target="_blanc"
                        >
                            https://github.com/darkmoonsk/
                        </a>
                        <br/>
                        Estou sempre aberto a novas oportunidades e
                        colaborações. Para entrar em contato, sinta-se à vontade
                        para me enviar um e-mail:
                        <br/>
                        <a href="contato@brunosouzadev.com." target="_blanc">
                            contato@brunosouzadev.com. 
                        </a><span className={styles.quote} >"</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default About;
