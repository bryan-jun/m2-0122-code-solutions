var message1 = document.querySelector('.message');

function update() {
  message1.textContent = 'Hello There';
}

setTimeout(update, 2000);
