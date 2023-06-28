import styles from "./ProjectCard.module.css";

function ProjectCardInverted(props) {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.url} target="_blanc">
                <button>Ver projeto</button>
            </a>
        </div>
        <img alt="Imagem do projeto" src={props.imgUrl} />
    </div>
  )
}

export default ProjectCardInverted