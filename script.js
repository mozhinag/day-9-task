const displayMessage = (message) => {
    document.getElementById('countdown').innerText = message;
  };
  
  const countdown = (num, callback) => {
    if (num > 0) {
      displayMessage(num);
      setTimeout(() => countdown(num - 1, callback), 1000);
    } else {
      callback();
    }
  };
  
  setTimeout(() => countdown(10, () => displayMessage('Happy Independence Day!')), 0);