import ProjectCard from "../../components/projectCard/ProjectCard";
import ProjectCardInverted from "../../components/projectCard/ProjectCardInverted";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <ProjectCard 
                imgUrl="./images/projects/disneyplus-3-devices-black.png" 
                url="http://disneyplus.brunosouzadev.com/"
                name="Disney+"
                description="Recriação do front-end do Disney+"
            />
            <ProjectCardInverted
                imgUrl="./images/projects/worldcup-3-devices-black.png" 
                url="http://worldcup22.brunosouzadev.com/"
                name="World Cup"
                description="Simulador da copa do mundo 2022"
            />
        </div>
    );
}

export default Home;
