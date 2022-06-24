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