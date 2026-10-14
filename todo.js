// let mainBox = document.getElementById("main-box");
// mainBox.innerHTML = `
// <h1 class="text-9xl text-center text-bold m-5">TODO APP</h1>`;
// mainBox.classList = "bg-green-500 border m-5 rounded-xl";
// let inputBox = document.getElementById("input-box");
// inputBox.classList = "flex flex-col m-5 border rounded-xl p-5";
// inputBox.innerHTML = `
//     <input type="text" class ="text-5xl m-2 border" placeholder="Enter title" id="title-box">
//     <textarea placeholder="Enter Decription" class="text-5xl m-2 border" id="description-box" ></textarea>
//     <button class="border bg-green-500 w-80 h-20 rounded-xl m-5 text-5xl place-self-center" onclick="add()">Add Task</button>
// `;
// function add() {
//   let titleBox = document.getElementById("title-box");
//   let descriptionBox = document.getElementById("description-box");
//   let titleBoxValue = titleBox.value;
//   let descriptionBoxValue = descriptionBox.value;
//   titleBox.value = "";
//   descriptionBox.value = "";
//   if (titleBoxValue == "" || descriptionBoxValue == "") {
//     Swal.fire({
//       title: "Alert",
//       text: "Please enter title and description",
//     });
//     return;
//   }
//   makeTask(titleBoxValue.trim(), descriptionBoxValue.trim());
// }
// function makeTask(titleBoxValue, descriptionBoxValue) {
//   let newTask = document.createElement("div");
//   newTask.classList = "border bg-green-300 rounded-sm m-2";
//   let id = new Date().getTime();
//   newTask.id = id;
//   newTask.innerHTML = `
//     <h1 class="text-5xl border m-1">${titleBoxValue}</h1>
//     <h2 class="text-3xl border m-1">${descriptionBoxValue}</h2>
//      <button class="rounded bg-green-700 text-3xl" onclick="deleteTask(${id})">Delete</button>  
//     `;
//   outputBox.appendChild(newTask);
// }
// function deleteTask(id) {
//   let task = document.getElementById(id);
//   task.remove();
// }
// let outputBox = document.getElementById("output-box");
// outputBox.classList = "flex flex-col m-5 border rounded-xl p-5";



let trash=`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`
let icon1 = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"></path></svg>`;
let icon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"></path></svg>`;
let editIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>`;

let mainBox = document.getElementById("main-box");
mainBox.innerHTML = `
<h1 class="text-7xl text-center text-bold m-5 font-bold --font-display: "Oswald", sans-serif text-shadow-lg">TODO APP</h1>`;
mainBox.classList = "bg-pink-500 border m-5 rounded-xl";
let inputBox = document.getElementById("input-box");
inputBox.classList = "flex flex-col m-5 border rounded-xl p-5 w-250 h-90 bg-pink-300 hover:bg-pink-350 hover:border-transparent";
inputBox.innerHTML = `
    <input type="text" class ="text-5xl m-2 border hover:bg-pink-500" placeholder="Enter title" id="title-box">
    <textarea placeholder="Enter Decription" class="text-5xl m-2 border hover:bg-pink-500" id="description-box" ></textarea>
    <button class="border bg-pink-500 w-80 h-20 rounded-xl m-5 text-5xl place-self-center " onclick="add()">Add Task</button>
`; 

let outputBox = document.getElementById("output-box");
outputBox.classList = "flex flex-col m-5 border rounded-xl p-5 w-200 overflow-y-scroll h-90 bg-pink-300 hover:border-transparent";


let isEditMode = false;
let editTaskId;

let tasks=getTasks();
buildTask();

function buildTask(){
if(tasks.length===0){
  outputBox.innerHTML = `<h1 class="text-3xl text-gray-400">No tasks added yet</h1>`;
}
  outputBox.innerHTML="";
  for (let i = 0; i < tasks.length; i++) {
    makeTask(tasks[i].title, tasks[i].description,tasks[i].id, tasks[i].date,tasks[i].status);
  }
}
function add() {
  let titleBox = document.getElementById("title-box");
  let descriptionBox = document.getElementById("description-box");
  let titleBoxValue = titleBox.value;
  let descriptionBoxValue = descriptionBox.value;
  titleBox.value = "";
  descriptionBox.value = "";
  if (titleBoxValue == "" || descriptionBoxValue == "") {
    Swal.fire({
      title: "Alert",
      text: "Please enter title and description",
    });
    return;
  }

  if(isEditMode){
    let taskBox = document.getElementById(editTaskId);
    let childNodes = taskBox.children;
    childNodes[0].innerText = titleBoxValue;
    childNodes[1].innerText = descriptionBoxValue;

    // let addBtn=document.getElementById("add-btn");
    // addBtn.innerText ="Add Task";
    // addBtn.classList.remove("bg-yellow-500");
    // addBtn.classList.add("bg-pink-500");
    isEditMode=false;

    tasks.forEach((task) => {
      if (task.id === editTaskId) {
        task.title = titleBoxValue;
        task.description = descriptionBoxValue;
      }
    });
    saveTasks(tasks);
  }
  else{
    if (outputBox.querySelector("h1.italic")) {
      outputBox.innerHTML = "";
    }
  } 

  let id=new Date().getTime();
  let dateString=new Date().toLocaleString();
  let status="pending";
  tasks.push({title:titleBoxValue,description:descriptionBoxValue,id:id,date:dateString,status:status});
  saveTasks(tasks);
makeTask(titleBoxValue, descriptionBoxValue,id,dateString,status);
}
function makeTask(titleBoxValue, descriptionBoxValue, id, dateString, status) {
  let newTask = document.createElement("div");
  newTask.classList = "border rounded-xl p-4 m-2 flex flex-col gap-2 transition-all bg-pink-500 ";
 
  newTask.id = id;

  let currentStatus=status==="done"? icon2:icon1;
  newTask.innerHTML = `
    <h1 class="text-5xl border m-1 bg-pink-300 hover:bg-pink-400">${titleBoxValue}</h1>
    <h2 class="text-3xl border m-1 bg-pink-300 hover:bg-pink-400">${descriptionBoxValue}</h2>
    <h2 class="text-2xl text-black-400 m-1 border bg-pink-300 hover:bg-pink-400">${dateString}</h2>
    <div class="flex gap-4 m-2">
     <button class=" rounded-xl bg-pink-200 text-white p-2 cursor-pointer" onclick="deleteTask(${id})">${trash}</button> 
     <button class="done-btn rounded-xl bg-pink-200 p-2 cursor-pointer " data-status="${status}" onclick="doneTask(${id})">${currentStatus}</button>
     <button class="add-btn rounded-xl bg-pink-200  p-2 cursor-pointer " data-status="${status}" onclick="editTask(${id})">${editIcon}</button>
     </div>
    `;
  outputBox.appendChild(newTask);
}

function editTask(id) {
  isEditMode = true;
  editTaskId = id;
  let titileBox = document.getElementById("title-box");
  let descriptionBox = document.getElementById("description-box");
 task = tasks.find((t) => t.id === id);
  titileBox.value=task.title;
  descriptionBox.value=task.description;
//    let addBtn=document.getElementById("add-btn");
//   addBtn.innerText= "Edit Task";
//   addBtn.classList.remove("bg-pink-500");
//   addBtn.classList.add("bg-yellow-500");
 }



function deleteTask(id) {
  let task = document.getElementById(id);
  task.remove();


  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);

   if (outputBox.children.length === 0) {
    outputBox.innerHTML = `<h1 class="text-3xl text-gray-400 ">No tasks added yet</h1>`;
  }
}

function doneTask(id) {
  let task = document.getElementById(id);
  if (!task) return;

  let doneButton = task.querySelector(".done-btn");
  let isDone = doneButton.getAttribute("data-status") === "done";
 let newStatus = isDone ? "pending" : "done";

  if (newStatus === "done") {
    doneButton.innerHTML = icon2;
    doneButton.setAttribute("data-status", "done");
  } else {
    doneButton.innerHTML = icon1;
    doneButton.setAttribute("data-status", "pending");
  }

  task.classList.toggle("bg-purple-200");


  let taskData = tasks.find((t) => t.id === id);
  if (taskData) {
    taskData.status = newStatus;
    saveTasks(tasks);
  }
}


function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasksString = localStorage.getItem("tasks");
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
}

