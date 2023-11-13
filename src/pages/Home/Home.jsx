import Projects from "../../components/templates/Projects";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Home.module.css";
import About from "../../components/about/About";
import WaveShape from "./../../components/svgs/WaveShape";

function Home() {
    return (
        <div className={styles.home}>
            <WaveShape fill="url(#gradient)" rotate="180" />
            <Projects>
                <ProjectCard
                    inverted
                    imgUrl="./images/projects/blog-3-devices-black.png"
                    url="https://www.brunosouzadev.com/"
                    gitUrl="https://github.com/darkmoonsk/blog"
                    name="Blog"
                    description="Este é o projeto do meu blog pessoal, onde comparto o meu conhecimento sobre as áreas de meu interesse, é uma demonstração de habilidades avançadas em desenvolvimento web FullStack. Utilizando Next.js, Tailwind CSS, TypeScript e Content Layer, o blog representa uma combinação perfeita de design moderno e funcionalidade robusta."
                />
                <ProjectCard
                    imgUrl="./images/projects/fernanda-3-devices-black.png"
                    url="https://www.fernandaschubert.com/"
                    gitUrl="https://github.com/darkmoonsk/project-nanda"
                    name="Fernanda Schubert"
                    description="Site para uma professora de idiomas, com tradução em alemão, espanhol e português, também conta com um formulário funcional."
                />
                <ProjectCard
                    inverted
                    imgUrl="./images/projects/disneyplus-3-devices-black.png"
                    url="http://disneyplus.brunosouzadev.com/"
                    gitUrl="https://github.com/darkmoonsk/disney-plus"
                    name="Disney+"
                    description="Recriação do front-end do Disney+, usando React, Redux, React Slick, Styled Components"
                />
                <ProjectCard
                    imgUrl="./images/projects/worldcup-3-devices-black.png"
                    url="http://worldcup2022.brunosouzadev.com/"
                    gitUrl="https://github.com/darkmoonsk/world-cup-2022"
                    name="World Cup 2022"
                    description='Descubra o "World Cup 2022 Simulator", um projeto que foi criado para um desafio de programação de curto 
                    prazo e que utiliza React e JavaScript para "simular" os jogos da Copa do Mundo de 2022. Com uma interface simples e responsiva, 
                    este simulador permite aos usuários criar e explorar diferentes cenários do torneio.
                    Destaques:
                    Interface de usuário clara e fácil de usar, Desenvolvido com tecnologias web modernas.
                    '
                />
            </Projects>
            <WaveShape fill={"rgb(30, 30, 60)"} />
            <About />
        </div>
    );
}

export default Home;
