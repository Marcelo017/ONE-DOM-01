import addTask from "./components/addTasks.js";
import { displayTasks } from "./components/readTasks.js";

const btnAdd = document.querySelector('[data-form-btn]');

btnAdd.addEventListener('click', addTask);

displayTasks();



