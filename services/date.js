export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(task => {
        console.log(task.dateFormat)
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    });

    return unique;
};

export const orderDates = (dates) => {
    return dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YY');
        const secondDate = moment(b, 'DD/MM/YY');
        return firstDate - secondDate;
    });
};