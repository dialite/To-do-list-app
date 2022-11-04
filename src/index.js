import './styles.css';
import editIcon from './edit_icon_img.png';
import refreshIcon from './refresh_icon_img.png';
import enterIcon from './enter_icon_img.png';
import deleteIcon from './erase_icon_img.png';
import * as func from './list_functions.js';
import Check from './check.js';

const refreshContainer = document.querySelector('.title img');
const enterContainer = document.querySelector('.text-input img');
const taskContainer = document.querySelector('.tasks');
const inputText = document.querySelector('.text-input input');
const sessionsSaved = JSON.parse(localStorage.getItem('session'));
const checkClass = new Check();

let taskarr = [];

const activebuttons = () => {
  const editcontainer = document.querySelectorAll('.tasks-item-start p');
  const editbutton = document.querySelectorAll('.edit_icon');
  const removeicon = document.querySelectorAll('.removeicon');
  const editinput = document.querySelectorAll('.edit_text');
  const completed = document.querySelectorAll('.checkboxicon')

  // Edit function
  editbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      removeicon[index].classList.add('active');
      editcontainer[index].classList.add('active');
      editbutton[index].classList.add('active');
      editinput[index].classList.add('active');
      editinput[index].addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && editinput[index].value !== '') {
          func.edit(editinput[index].value, taskarr, index);
          localStorage.setItem('session', JSON.stringify(taskarr));
          editcontainer[index].textContent = taskarr[index].description;
          editcontainer[index].classList.remove('active');
          editinput[index].classList.remove('active');
          editbutton[index].classList.remove('active');
          removeicon[index].classList.remove('active');
        }
      });
    });
  });

  // Remove function
  removeicon.forEach((element, index) => {
    element.addEventListener('click', () => {
      func.erase(taskarr, removeicon[index].parentElement.id);
      localStorage.setItem('session', JSON.stringify(taskarr));
      removeicon[index].parentElement.remove();
      const tasks = document.querySelectorAll('.tasks-item');
      tasks.forEach((element, index) => {
        element.id = taskarr[index].index;
      });
    });
  });

  // Checkbox Operation function
  completed.forEach((element, index) => {
    element.addEventListener('change', () => {
      if (element.checked === true) {
        checkClass.checked(taskarr, completed[index].parentElement.parentElement.id);
        localStorage.setItem('session', JSON.stringify(taskarr));
      } else {
        checkClass.unchecked(taskarr, completed[index].parentElement.parentElement.id);
        localStorage.setItem('session', JSON.stringify(taskarr));
      }
    })
  })
};

// DOM Structure for each task
const storagetasks = () => {
  taskarr.forEach((element) => {
    if (element.completed === false) {
      taskContainer.innerHTML += `<div class="tasks-item" id="${element.index}">
        <div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
        <p>${element.description}</p>
        <input class="edit_text" type="text" placeholder="Edit Task">
        </div>
        <img class="edit_icon" src="${editIcon}" alt="edit icon">
        <img class="removeicon" src="${deleteIcon}" alt="remove icon">
        </div>`;
    } else {
      taskContainer.innerHTML += `<div class="tasks-item" id="${element.index}">
        <div class="tasks-item-start"><input type="checkbox" class="checkboxicon" checked>
        <p>${element.description}</p>
        <input class="edit_text" type="text" placeholder="Edit Task">
        </div>
        <img class="edit_icon" src="${editIcon}" alt="edit icon">
        <img class="removeicon" src="${deleteIcon}" alt="remove icon">
        </div>`;
    }
  });
};

// When localStorage is not empty
if (sessionsSaved !== null) {
  taskarr = sessionsSaved;
  storagetasks();
  activebuttons();
}

// Add function with event listener in DOM
inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputText !== '') {
    func.add(inputText.value, taskarr);
    localStorage.setItem('session', JSON.stringify(taskarr));
    taskContainer.innerHTML += `<div class="tasks-item" id="${taskarr[taskarr.length - 1].index}">
      <div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
      <p>${taskarr[taskarr.length - 1].description}</p>
      <input class="edit_text" type="text" placeholder="Edit Task">
      </div>
      <img class="edit_icon" src="${editIcon}" alt="edit icon">
      <img class="removeicon" src="${deleteIcon}" alt="remove icon">
      </div>`;
    inputText.value = '';
    activebuttons();
  }
});

// Add source to image file
refreshContainer.src = refreshIcon;
enterContainer.src = enterIcon;
