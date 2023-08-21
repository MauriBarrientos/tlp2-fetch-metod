const ejercicio2 = {
  title: 'Instituto Politécnico Formosa',
  body: 'Tec. Sup. Desarrollo de Software Multiplataforma.',
};

fetch ('https://jsonplaceholder.typicode.com/posts',{
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
body: JSON.stringify(ejercicio2)
})

.then(response => response.json())
.then(data =>{
  console.log('Respuesta del servidor:',data);
})

.catch(error => {
  console.error('Ha ocurrido un error:', error);
});