const emailList = document.getElementById('email-list');
const button = document.getElementById('genera-email');

function generaEmail() {
    emailList.innerHTML = ''; // svuoto la lista
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(response => response.json())