document.querySelector("#form").addEventListener('click', loadUsers)

function loadUsers(e) {
  const gender = document.querySelector("#select").value;
  const http = new easyHTTP;
  http.get(`https://randomuser.me/api/?gender=${gender}`, function(err, users) {
    if(!err) {
      let output = '';
      let userObj = JSON.parse(users);
      userObj.results.forEach(user => {
        output += `
          <tr>
            <td>${user.name.first}</td>
            <td><img src="${user.picture.large}" alt="user images" /></td>
          </tr>`;
      });
      document.querySelector(".output").innerHTML = `<table>${output}</table>`;
    } else {
      console.log(err)
    }
  });

  e.preventDefault();
}