import Projects from "../../components/templates/Projects";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Home.module.css";
import About from "../../components/about/About";

function Home() {

    return (
        <div className={styles.home}>
            <Projects>
                <ProjectCard
                    imgUrl="./images/projects/fernanda-3-devices-black.png" 
                    url="https://www.fernandaschubert.com/"
                    name="Fernanda Schubert"
                    description="Site para uma professora de idiomas, com tradução em alemão, espanhol e português, também conta com um formulário funcional."
                />
                <ProjectCard 
                    inverted
                    imgUrl="./images/projects/disneyplus-3-devices-black.png" 
                    url="http://disneyplus.brunosouzadev.com/"
                    name="Disney+"
                    description="Recriação do front-end do Disney+, usando React, Redux, React Slick, Styled Components"
                />
                <ProjectCard 
                    imgUrl="./images/projects/ministry-3-devices-black.png" 
                    url="http://ministry.brunosouzadev.com/"
                    name="Ministry"
                    description="Plataforma para gerenciar relatórios teocráticos."
                    description2={
                        <>
                            <p>Usuario de teste: test@test.com</p>
                            <p>Senha: test123456</p>
                        </>
                    }
                />
                
            </Projects>
            <About />
        </div>     
    );
}

export default Home;
