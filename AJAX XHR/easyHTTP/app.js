const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, post){
//   if(!err) {
//     console.log(post);
//   } else {
//     console.log(err)
//   }
// });

const data = {
  title: 'Custom Post1',
  body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', post,
// function(err, post){
//   if(!err) {
//     console.log(post);
//   } else {
//     console.log(err);
//   }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/5', data,
// function(err, post){
//   if(!err) {
//     console.log(post);
//   } else {
//     console.log(err);
//   }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/5',
function(err, response){
  if(!err) {
    console.log(response);
  } else {
    console.log(response);
  }
});