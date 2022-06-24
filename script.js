window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});



var items = [];

function pushArray() {
    inputValue = document.getElementById('new-item-input').value;
    items.push(inputValue);  
    console.log(items);
    return false;
  }



const hidden_btn = document.getElementById('hidden-submit-btn');

hidden_btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const userInput = document.getElementById('new-item-input');

  // Send value to server
  console.log(userInput.value);
  pushArray() 

  // 👇️ clear input field
  userInput.value = '';
});