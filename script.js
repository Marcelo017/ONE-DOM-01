const btnAdd = document.querySelector('[data-form-btn]');


const createTask = (e) => {
  e.preventDefault()
  console.log('hiciste click')
  const input = document.querySelector("[data-form-input]");
  const value = input.value
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card')
  input.value = '';
  const content = `<div>
  <i class="fas fa-check-square completedIcon icon"></i>
  <span class="task">${value}</span>
  <i class="fas fa-check-squareX"></i>
</div>`
  task.innerHTML = content;
  list.appendChild(task)
}


btnAdd.addEventListener('click', createTask)
