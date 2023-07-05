import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={styles.container}>
        { !props.inverted ? 
          <img alt="Imagem do projeto" src={props.imgUrl} />
        : <></>}
        <div className={styles.info}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.url} target="_blanc">
                  <button>Ver projeto</button>
            </a>
        </div>
        { props.inverted ? 
          <img alt="Imagem do projeto" src={props.imgUrl} />
        : <></>}
    </div>
  )
}

export default ProjectCard