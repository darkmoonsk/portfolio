import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={styles.container}>
        <img alt="Imagem do projeto" src={props.imgUrl} />
        <div className={styles.info}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProjectCard