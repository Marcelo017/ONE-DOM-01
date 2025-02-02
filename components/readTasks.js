import { createTask } from "./addTasks.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates);

    dates.forEach(date => {
        const dateMoment = moment(date, 'DD/MM/YY');
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YY');
            const diff = dateMoment.diff(taskDate);
            if (diff === 0) list.appendChild(createTask(task));
        });
    });
}