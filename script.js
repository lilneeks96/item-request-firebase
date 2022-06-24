window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});




window.onload=function(){
    document.getElementById('new-item-input').addEventListener('input', function() {
        console.log(this.value);
    });
  }

// console.log(document.getElementById('new-item-input').value);