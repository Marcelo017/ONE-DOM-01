const btnAdd = document.querySelector('[data-form-btn]');

const createTask = (e) => {
  e.preventDefault()
  console.log('hiciste click')
  const input = document.querySelector("[data-form-input]");
  console.log(input.value)
}


btnAdd.addEventListener('click', createTask)
