//IMPORT SCRIPTS
/*
import { createProject } from "project.js";
import { saveProjects } from "storage.js";

createProject();
saveProjects([]);*/

import { createProject } from "./project.js";
import { saveProject } from "./storage.js";

const createProjectBtn =
    document.getElementById("createProjectBtn");

createProjectBtn.addEventListener("click", () => {

    const project = createProject(

        document.getElementById("clientName").value,

        document.getElementById("projectName").value,

        document.getElementById("description").value,

        document.getElementById("price").value,

        document.getElementById("status").value

    );

    saveProject(project);

    window.location.href = "./index.html";

});




/******************** */
import {
    createProject,
    createProjectCard
} from "./project.js";


const project = createProject(
    "Alpha Gym",
    "Landing Page",
    "Website for students",
    800,
    "development"
);

const card = createProjectCard(project);

document.body.appendChild(card);



//LOAD STORAGE
import { loadProjects } from "./storage.js";

const projectList =
    document.getElementById("projectList");

const projects = loadProjects();

projects.forEach(project => {

    const card = document.createElement("div");

    card.className =
        "card shadow-sm mb-3";

    card.innerHTML = `

        <div class="card-body">

            <h5>${project.clientName}</h5>

            <p>${project.projectName}</p>

            <p>${project.description}</p>

            <span class="badge text-bg-success">
                R$ ${project.price}
            </span>

        </div>

    `;

    projectList.appendChild(card);

});


//DELETE FUNCTION
const deleteBtn = document.getElementById("deleteBtn");
const projectCard = document.getElementById("projectCard");

deleteBtn.addEventListener("click", () => {

    const confirmDelete = confirm(
        "Are you want to delete this project?"
    );

    if (confirmDelete) {
        projectCard.remove();
        console.log("Project deleted");

        

    }

});

//COLOR CARF
const statusSelect = document.getElementById("projectStatus");

statusSelect.addEventListener("change", updateCardBorder);

function updateCardBorder() {

    projectCard.classList.remove(
        "border-danger",
        "border-warning",
        "border-success",
        "border-3"
    );

    switch (statusSelect.value) {

        case "development":
            projectCard.classList.add(
                "border-danger",
                "border-3"
            );
            break;

        case "delivered":
            projectCard.classList.add(
                "border-warning",
                "border-3"
            );
            break;

        case "paid":
            projectCard.classList.add(
                "border-success",
                "border-3"
            );
            break;
    }
}

updateCardBorder();


