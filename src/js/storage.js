/**createProject.html
↓
Salvar projeto no LocalStorage
↓
Redirecionar para index.html
↓
index.html carrega os projetos
↓
Renderiza os cards
 */
//Save Project
export function saveProject(project) {

    const projects =
        JSON.parse(localStorage.getItem("projects"))
        || [];

    projects.push(project);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

}

//Load Project
export function loadProjects() {

    return JSON.parse(
        localStorage.getItem("projects")
    ) || [];

}