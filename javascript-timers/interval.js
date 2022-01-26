var message2 = document.querySelector('.countdown-display');

var text = ['3', '2', '1', '~Earth Beeeeloooww Us!'];

var count = 0;

function update() {
  message2.innerHTML = text[count];
  count += 1;

  if (count === 4) {
    clearInterval(myInterval);
  }

}

var myInterval = setInterval(update, 1000);
