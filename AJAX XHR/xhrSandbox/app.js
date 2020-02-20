document.querySelector('#button').addEventListener('click', loadCustomer);
const output = document.querySelector('.output');

function loadCustomer() {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', 'data.txt', true);

  // console.log(xhr.readyState);
  xhr.onload = function() {
    if(this.status === 200) {
      output.innerHTML = this.responseText;
    }
  };

  // optional used for spinners or loaders
  // xhr.onprogress = function() {
  //   console.log(xhr.readyState);
  // }

  // xhr.onerror = function() {
  //   console.log('request error');
  // }

  // xhr.onreadystatechange = function() {
  //   console.log(this.readyState);
  //   if(this.readyState === 4 && this.status === 200) {
  //     console.log(this.readyState);
  //   }
  // }

  xhr.send();
}

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP status
// 200: Ok
// 403: Forbidden
// 404: Not Found