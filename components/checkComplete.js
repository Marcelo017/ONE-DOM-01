const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (e) => completeTask(e, id));
    return i;
};

const completeTask = (e, id) => {
    const element = e.target;
    element.classList.toggle('fas');//toggle si existe la elimina sino la agrega
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex(item => item.id === id);
    tasks[index]['complete'] = !tasks[index]['complete']; //negamos el contenido true-->false false-->true
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default checkComplete;