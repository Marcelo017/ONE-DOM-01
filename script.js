(() => {
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
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    list.appendChild(task);
  }


  btnAdd.addEventListener('click', createTask);

  const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask)
    return i
  }

  const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle('fas');//toggle si existe la elimina sino la agrega
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
  }

})()

