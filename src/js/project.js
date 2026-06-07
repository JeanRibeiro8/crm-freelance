//CREATE PROJECT
export function createProject(
    clientName,
    projectName,
    description,
    price,
    status
) {

    return {
        id: Date.now(),
        clientName,
        projectName,
        description,
        price,
        status
    };

}

export function createProjectCard(project) {

    const card = document.createElement("div");

    card.classList.add(
        "card",
        "shadow-sm",
        "mb-3"
    );

    card.innerHTML = `
    
        <div class="card-body">

            <h5>${project.clientName}</h5>

            <p class="text-muted">
                ${project.projectName}
            </p>

            <p>
                ${project.description}
            </p>

            <span class="badge text-bg-success">
                R$ ${project.price}
            </span>

        </div>

    `;

    return card;

}