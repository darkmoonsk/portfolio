import Projects from "../../components/templates/Projects";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Home.module.css";
import About from "../../components/about/About";

function Home() {
    return (
        <div className={styles.home}>
            <Projects>
                <ProjectCard 
                    imgUrl="./images/projects/ministry-3-devices-black.png" 
                    url="http://ministry.brunosouzadev.com/"
                    name="Ministry"
                    description="Plataforma para gerenciar relatórios teocráticos"
                    description2={
                        <>
                            <p>Usuario de teste: test@test.com</p>
                            <p>Senha: test123456</p>
                        </>
                    }
                />
                <ProjectCard 
                    inverted
                    imgUrl="./images/projects/disneyplus-3-devices-black.png" 
                    url="http://disneyplus.brunosouzadev.com/"
                    name="Disney+"
                    description="Recriação do front-end do Disney+, usando React, Redux, React Slick, Styled Components"
                />
                <ProjectCard
                    imgUrl="./images/projects/worldcup-3-devices-black.png" 
                    url="http://worldcup2022.brunosouzadev.com/"
                    name="World Cup"
                    description="Simulador da copa do mundo 2022"
                />
            </Projects>
            <About />
        </div>     
    );
}

export default Home;
