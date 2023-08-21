fetch('https://cors-anywhere.herokuapp.com/https://via.placeholder.com/150')

.then(response => response.blob())

.then(blob => {
  const imagen = URL.createObjectURL(blob);
  const imgMuestra = document.getElementById('150');
  imgMuestra.src = imagen;
})

.catch(error => {
  console.error(error);
});