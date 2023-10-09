const username = document.querySelector('#user')
const password = document.querySelector('#password')
const formLogin = document.forms[0]

//Header constructor
var menu = []
import("./constructor.js").then((module) => {
 module.menu.forEach(item=>{
  menu.push(item)
 })
})

formLogin.onsubmit = function(event) {
  event.preventDefault()

  if (username.value != 'admin' || password.value != '123456') {
    alert('Usuário não cadastrado. Tente novamente!')
  } else {
    alert('Seja bem vindo de volta, Admin')
    window.location.href = ('./adm.html')
  }
 
}
