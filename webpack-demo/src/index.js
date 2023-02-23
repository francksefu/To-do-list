import _ from 'lodash';

import './style.css';

const arr = [
  { description: 'Wash car', completed: false, index: 0 },
  { description: 'study', completed: false, index: 1 },
  { description: 'prier', completed: true, index: 2 },
  { description: 'Help parent', completed: false, index: 3 },
];
const use = _;
const container = document.querySelector('.container');

let check = 'checked';
function completeTask() {
  const ul = document.createElement('ul');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].completed === true && use !== 1) {
      check = 'checked';
    } else {
      check = '';
    }
    ul.innerHTML += `<li class="flex">
    <label for="${i}">
        <input type="checkbox" class="padding" ${check} name="" id="${i}">${arr[i].description}
    </label>
        <span class="material-symbols-outlined sombre flotteur">
        more_vert
        </span>
</li>`;
  }
  ul.innerHTML += `<li class="last-button">
  Clear all completed
</li>`;
  container.appendChild(ul);
}

window.addEventListener('load', completeTask);