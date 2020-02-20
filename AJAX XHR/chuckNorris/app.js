document.querySelector('#form').addEventListener('submit', loadJokes);

function loadJokes(e) {
  const xhr = new XMLHttpRequest;
  const number = document.querySelector('input[type="number"]').value;
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
  xhr.onload = function() {
    if(this.status === 200) {
      let response = JSON.parse(this.responseText);
      let output = '';
      if(response.type === 'success') {
        response.value.forEach(joke => {
          output += `
            <li>${joke.joke}</li>
          `;
        });
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.output').innerHTML = `<ol>${output}</ol>`
    }
  }
  xhr.send();  
  e.preventDefault();
}