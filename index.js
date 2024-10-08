let API_URL = "http://localhost:3000/tasks";

async function fetchTask() {
    try {
        let response = await fetch("http://localhost:3000/tasks");
        let result = await response.json();
        console.log(result.tasks)
        displayTasks(tasks);

    }
    catch (error) {
        console.log(error);
    }
}

fetchTask();

function displayTasks(tasks) {
    let card = document.createElement("div");

    let app = document.getElementById("app");

    tasks.forEach(element => {

        let id = document.createElement("p");
        id.innerText = element.id;

        let title = document.createElement("h2");
        title.innerHTML = element.title;

        let description = document.createElement("p");
        description.innerHTML = element.description;

        let status = document.createElement("p");
        status.innerHTML = element.status;

        let duedate = document.createElement("p");
        duedate.innerHTML = element.duedate;

        card.append(id, title, description, status, duedate);
        app.append(card);


    });

}


function getpriority(duedate) {
    const now = new Date();
    const due = new Date(duedate);
    const minutesleft = (due - now) / 60000;
    if (minutesleft <= 2) {
        return "high";
    }
    else if (minutesleft <= 3) {
        return "medium";
    }
    else {
        return "low";
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    }
    catch (error) {
        console.log("error");
    }
}

function setuppagination() {
    let pagination = document.getElementById("pagintaion");
    pagination.innerHTML = `
    <button onclick="changepage(${currentpage - 1})">
    <button:onclick="changepage(${currentpage + 1})">Next`
}



function changepage(page){
    currentpage=page;
    fetchtasks(currentpage);
     }


// implentation of Crud Operations

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("task-form").innerHtml=createTaskForm();
    fetchTask();
    }
);

// function creativetaskforms(task=()){
// return '
// <form id="task-form"
// });
