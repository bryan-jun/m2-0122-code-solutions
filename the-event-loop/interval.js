let number = 3;

const interval = setInterval(() => {

  if (number === 0) {
    console.log('Blast Off!');
    clearInterval(interval);
  } else {
    console.log(number);
    number -= 1;
  }

}, 1000);
