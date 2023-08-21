fetch('https://jsonplaceholder.typicode.com/posts')

.then(response => response.json())

.then(data => {
  const elementosArray = data.slice(0, 3);
  console.log(elementosArray);
})

.catch(error => {
  console.error(error);
});