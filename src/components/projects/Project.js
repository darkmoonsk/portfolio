import styles from "./Project.module.css";

function Project(props) {
  return (
    <div className={styles.project}>
        <img alt="Imagem do projeto" src={props.imgURL} />
        <h2>{props.projectName}</h2>
        <div>{props.children}</div>
    </div>
  )
}

export default Project