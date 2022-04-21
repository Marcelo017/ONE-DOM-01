import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js'


const btnAdd = document.querySelector('[data-form-btn]');


const createTask = (e) => {
  e.preventDefault()

  const input = document.querySelector("[data-form-input]");
  const calendary = document.querySelector("[data-form-date]")
  const list = document.querySelector('[data-list]');


  const value = input.value
  const date = calendary.value
  console.log(date)

  const task = document.createElement('li');
  task.classList.add('card');

  input.value = '';

  const taskContent = document.createElement('div');
  taskContent.appendChild(checkComplete());

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;

  taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
}


btnAdd.addEventListener('click', createTask);



