document.querySelector("#button1").addEventListener('click', getText)
document.querySelector("#button2").addEventListener('click', getJSON)
document.querySelector("#button3").addEventListener('click', getExternal)

function getText() {
  fetch('data.txt')
    .then(function(resp) {
      return resp.text();
    })
    .then(function(data) {
      console.log(data);
      document.querySelector('.output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getJSON() {
  fetch('posts.json')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.body}</li>`
      });
      document.querySelector('.output').innerHTML = `<ul>${output}</ul>`;
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.querySelector('.output').innerHTML = `<ul>${output}</ul>`;
    })
    .catch(function(err) {
      console.log(err);
    })
}