const form = document.getElementById('form');
const button = document.getElementById('button')

button.addEventListener('click', function (event) {
  event.preventDefault(); 


  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const numero = document.getElementById('number').value

  if (!name || !email || !numero) {
    alert('Por favor, preencha todos os campos!');
  } else {
    alert('Sucesso! Informações preenchidas corretamente.');
  }
});