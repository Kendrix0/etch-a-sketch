const container = document.querySelector('.container');
const clear = document.querySelector('.clear')

let size = 64

function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size**2); c++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', () => {
      cell.setAttribute('style', 'background-color: black')
    });
    container.appendChild(cell);
  };
};

clear.onclick = () => {
  container.innerHTML = ''
  makeRows(size)
}

makeRows(size);