import Project from "../../components/projects/Project";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <>
            <div className={styles.header}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projectsContainer}>
                <Project
                    projectName="Disney Plus"
                    imgURL="./images/projects/disneyplus.png"
                >
                    <p>
                        Front-end do disney plus criado utilizando React, Redux,
                        Styled Components, React Slick, React Router e Firebase.
                    </p>
                    <p>
                        Com este projeto pude aprofundar meus conhecimentos e
                        tecnicas com gerenciamento de estados com Redux e
                        requisições ao banco de dados com fetch e Firebase.
                    </p>
                </Project>
                <Project
                    projectName="World Cup Catar 2022"
                    imgURL="https://user-images.githubusercontent.com/101902194/197263804-6e15b88c-10ff-498a-bccc-19e96f1f0bca.png"
                >
                    <p>
                        Simulador da copa do mundo 2022, gera todos os grupos
                        aleatoriamente e simula todos os resultados desde a fase
                        de grupos até os mata-matas.
                    </p>
                    <p>
                        Através de um modal é mostrado na tela todas as partidas
                        de cada grupo e os resultados, também possui um
                        simulador de penaltis caso o resultado termine empatado
                        no mata-mata
                    </p>
                </Project>
                <Project
                    projectName="Expense APP"
                    imgURL="./images/projects/expense-app.png"
                >
                    <p>
                        Um gerenciador de despesas conceitual feito em React,
                        onde é possivel adicionar despesas com data, nome e
                        valor.
                    </p>
                    <p>
                        Possui um filtro por ano e também um gráfico que mostra
                        as despesas por mês.
                    </p>
                </Project>
                <Project
                    projectName="Calculadora feita em React"
                    imgURL="./images/projects/calculator-react.png"
                >
                    <p>
                        Uma calculadora feita em react utilizando maquina de
                        estados para realizar todos os calculos básicos.
                    </p>
                    <p>
                        Adicionalmente pode apagar todos os números
                        digitados(Tecla C) ou digito por digito(Tecla DEL) e
                        realizar calculos em sequência.
                    </p>
                </Project>
                <Project
                    projectName="My Tasks"
                    imgURL="./images/projects/todo.png"
                >
                    <p>
                        My tasks é um todo list simples, um dos meus primeiros
                        projetos em react, onde se pode adicionar tarefas para
                        serem completadas, marcar como feitas ou deletar as
                        tarefas.
                    </p>
                </Project>
                <Project
                    projectName="GitFind"
                    imgURL="https://user-images.githubusercontent.com/101902194/198359831-af3c4543-e92b-4151-9288-298d65d73a91.png"
                >
                    <p>
                        Um buscador de perfil de usuarios do Github, ao buscar é
                        fornecido a foto e descrição do Perfil, também é listado
                        todos os repositórios com nome e descrição assim como
                        seus respectivos links.
                    </p>
                </Project>
            </div>
            <div className={styles.options}>
                <a
                    rel="noreferrer"
                    href="https://github.com/darkmoonsk"
                    target="_blank"
                    className={styles.btn}
                >
                    Acesse meu Github para ver todos os meus projetos
                </a>
            </div>
        </>
    );
}

export default Projects;
