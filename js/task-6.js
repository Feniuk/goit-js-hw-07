const input = document.querySelector('.text-input');
const createBtn = document.querySelector('.create-button');
const destroyBtn = document.querySelector('.destroy-button');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);

function onCreateClick() {
  const amount = input.valueAsNumber;

  if (isValidAmount(amount)) {
    createBoxes(amount);
    input.value = '';
  }
}

function onDestroyClick() {
  destroyBoxes();
}

function isValidAmount(amount) {
  return amount >= 1 && amount <= 100;
}

function createBoxes(amount) {
  destroyBoxes(); // Очищення перед створенням нових елементів

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
