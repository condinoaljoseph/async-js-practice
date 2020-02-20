document.querySelector("#button1").addEventListener('click', getText)
document.querySelector("#button2").addEventListener('click', getJSON)
document.querySelector("#button3").addEventListener('click', getExternal)

function getText() {
  fetch('data.txt')
    .then(resp => resp.text())
    .then(data => {
      console.log(data);
      document.querySelector('.output').innerHTML = data;
    })
    .catch(err => err)
}

function getJSON() {
  fetch('posts.json')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => output += `<li>${post.title}</li>`);
      document.querySelector('.output').innerHTML = `<ul>${output}</ul>`;
    })
    .catch(err => err)
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => output += `<li>${user.login}</li>`);
      document.querySelector('.output').innerHTML = `<ul>${output}</ul>`;
    })
    .catch(err => err)
}