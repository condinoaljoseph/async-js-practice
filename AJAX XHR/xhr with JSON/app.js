document.querySelector(".customer1").addEventListener('click', function() {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if(this.status === 200) {  
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.address}</li>
          <li>${customer.gender}</li>
        </ul>
      `;
      document.querySelector('.output1').innerHTML = output;
    }
  }
  xhr.send();
});

document.querySelector(".customer2").addEventListener('click', function() {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if(this.status === 200) {  
      const customers = JSON.parse(this.responseText);
      let output = '';

      customers.forEach(customer => {
        output += `
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.address}</td>
            <td>${customer.gender}</td>
          </tr>
        `;
      });
      console.log(customers);
      document.querySelector('.output2').innerHTML = output;
    }
  }
  xhr.send();
});