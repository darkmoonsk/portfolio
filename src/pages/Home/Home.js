import Projects from "../../components/templates/Projects";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Home.module.css";
import About from "../../components/about/About";

function Home() {
    return (
        <div className={styles.home}>
            <Projects>
                <ProjectCard 
                    imgUrl="./images/projects/disneyplus-3-devices-black.png" 
                    url="http://disneyplus.brunosouzadev.com/"
                    name="Disney+"
                    description="Recriação do front-end do Disney+"
                />
                <ProjectCard
                    inverted
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
