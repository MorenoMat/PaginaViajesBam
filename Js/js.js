// Variables y metodos 
const password = document.getElementById('password');
const email = document.getElementById('email');
const button = document.getElementById('button');
//Funciones  metodos  y eventos 
button.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {
    password: password.value,
    email: email.value
  };

  // Simulación de una base de datos con credenciales válidas
  const validCredentials = {
    email: 'usuario@example.com',
    password: 'contraseña123'
  };
  //Condicionales
  // Compara las credenciales ingresadas con las válidas
  if (data.email === validCredentials.email && data.password === validCredentials.password) {
    // Redirige al usuario a otra página
    window.location.href = 'login.html';
  } else {
    // Muestra un mensaje de error si las credenciales son incorrectas
    alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
  }
});