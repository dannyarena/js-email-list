
const emailList = document.getElementById('email-list');
const button = document.getElementById('genera-email');

function generaEmail() {
  emailList.innerHTML = ''; // svuoto la lista
  for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => response.json())
      .then(data => {
        const li = document.createElement('li');
        li.textContent = data.response;
        emailList.appendChild(li);
      });
  }
}

button.addEventListener('click', generaEmail);

// Genera subito 10 email quando carichi la pagina
generaEmail();
