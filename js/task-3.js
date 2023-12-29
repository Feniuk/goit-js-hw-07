const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInputCongrats);

function onInputCongrats(){
    const inputValue = inputText.value.trim();
    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        outputText.textContent = inputValue;
      }
}