import { useRef, useEffect } from "react";
import styles from "./ProjectCard.module.css";


function ProjectCard(props) {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(!props.inverted) {
              entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
            } else {
              entry.target.classList.add('animate__animated', 'animate__fadeInRight');
            }
            setTimeout(() => {
              entry.target.classList.remove('animate__animated', 'animate__fadeInLeft', "animate__fadeInRight");
            }, 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} data-projectcard className={`animate__animated ${styles.container}`}>
        { !props.inverted ? 
          <img alt="Imagem do projeto" src={props.imgUrl} />
        : <></>}
        <div className={styles.info}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div>{props.description2}</div>
            <a href={props.url} target="_blanc">
                  <button>Ver projeto</button>
            </a>
            <a href={props.gitUrl ?? "#"} target="_blanc">
                  <button>Repositório do Projeto</button>
            </a>
        </div>
        { props.inverted ? 
          <img alt="Imagem do projeto" src={props.imgUrl} />
        : <></>}
    </div>
  )
}

export default ProjectCard