// https://jsonplaceholder.typicode.com/posts

const http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err))

const data = {
  title: "This is my post",
  body: "This is about my life"
}

// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/posts/1', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch(err => console.log(err))