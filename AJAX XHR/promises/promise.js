// const urls = [
// 	'https://jsonplaceholder.typicode.com/posts',
// 	'https://jsonplaceholder.typicode.com/comments',
// 	'https://jsonplaceholder.typicode.com/albums'
// ];
// Promise.all(urls.map(url => {
// 	return fetch(url).then(resp => resp.json());
// })).then(results => {
//   console.log(results);
// }).catch(() => console.log('error'));

const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('Success');
  } else {
    reject('Error, something went wrong');
  }
});

promise.then(result => console.log(result)).catch((err) => console.log(err));