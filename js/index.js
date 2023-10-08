const username = document.querySelector('#user')
const password = document.querySelector('#password')
const formLogin = document.forms[0]


formLogin.onsubmit = function(event) {
  event.preventDefault()

  if (username.value != 'admin' || password.value != '123456') {
    alert('Usuário não cadastrado. Tente novamente!')
  } else {
    alert('Seja bem vindo de volta, Admin')
    window.location.href = ('./adm.html')
  }
  console.log(username.value)
  console.log(password.value)

}
