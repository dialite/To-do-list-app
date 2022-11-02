import './index.css';

const taskList = document.querySelector('.list');
const task = [
  {
    index: 0,
    description: 'House chores',
    completed: false,
  },
  {
    index: 1,
    description: 'Read school books',
    completed: false,
  },
  {
    index: 2,
    description: 'Lunch break',
    completed: false,
  },
  {
    index: 3,
    description: 'Play games',
    completed: false,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  task.forEach((elem) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'item');
    listItem.innerHTML = `<i class="far fa-square" id=${elem.index}></i>
    <p class='description'>${elem.description}</p>
    <i class="fas fa-ellipsis-v"></i>`;
    taskList.appendChild(listItem);
  });
});
