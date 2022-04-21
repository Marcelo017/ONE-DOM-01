

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

export default checkComplete;