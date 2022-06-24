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



const btn = document.getElementById('hidden-submit-btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('new-item-input');

  // Send value to server
  console.log(firstNameInput.value);
  pushArray() 

  // 👇️ clear input field
  firstNameInput.value = '';
});