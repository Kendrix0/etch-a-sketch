const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const gridSize = document.querySelector('#gridSize');
const gridColor = document.querySelector('#gridColor');
const sizeLabel = document.querySelector('#sizeLabel');

container.addEventListener('mouseover', (e) => {
  if (e.ctrlKey) {
    e.target.setAttribute('style', `background-color: ${gridColor.value}`)
  }
})

function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size**2); c++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell);
  };
  gridSize.value = size
};

clearBtn.onclick = () => {
  container.innerHTML = ''
  makeRows(gridSize.value)
}

gridSize.onmousemove = (e) => {
  sizeLabel.textContent = `${e.target.value} x ${e.target.value}`
};

gridSize.onchange = (e) => {
  sizeLabel.textContent = `${e.target.value} x ${e.target.value}`
  container.innerHTML = ''
  makeRows(e.target.value)
}

makeRows(16);