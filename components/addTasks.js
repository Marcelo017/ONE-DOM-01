import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector("[data-form-input]");
    const calendary = document.querySelector("[data-form-date]");

    const value = input.value
    const date = calendary.value
    const dateFormat = moment(date).format('DD/MM/YYYY');
    const id = uuid.v4();

    if (value === '' || date === '') {
        return
    };
    const complete = false;
    /* const taskObj = {
        value,
        dateFormat
    } */
    list.innerHTML = '';
    //sessionStorage.setItem('tasks', JSON.stringify(taskObj))//la info persiste mientras este abierta la pastanha
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksList.push({ value, dateFormat, complete, id })//hago el push del objeto directamente
    localStorage.setItem('tasks', JSON.stringify(tasksList))

    displayTasks();

    input.value = '';
    calendary.value = '';
}




export const createTask = ({ value, dateFormat, complete, id }) => {
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');


    const check = checkComplete(id)
    if (complete) {
        check.classList.toggle('fas');//toggle si existe la elimina sino la agrega
        check.classList.toggle('far');
        check.classList.toggle('completeIcon');
    }

    taskContent.appendChild(check);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    return task
}

export default addTask;