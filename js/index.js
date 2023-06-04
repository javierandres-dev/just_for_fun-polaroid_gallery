'use strict';
const d = document,
  $puppies = d.getElementById('puppies'),
  names = [
    'Ace',
    'Archie',
    'Bailey',
    'Bear',
    'Blue',
    'Bodie',
    'Bowie',
    'Cash',
    'Charlie',
    'Chester',
  ];

d.addEventListener('DOMContentLoaded', () => {
  setPuppies();
});

function setPuppies() {
  let html = '',
    i = 0;
  while (i < names.length) {
    html += `<figure class="card"><img src="./img/puppy${i}.jpeg" alt="${names[i]}" class="image"/><figcaption class="name">${names[i]}</figcaption></figure>`;
    i++;
  }
  $puppies.innerHTML = html;
}
