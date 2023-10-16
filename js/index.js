const defaultPath = 'http://127.0.0.1:8080/api/clients'
const userName = document.querySelector('#user')
const password = document.querySelector('#password')
const formLogin = document.forms[0]
const btsignUp = document.querySelector('#signUp')


formLogin.onsubmit = async function(event) {
  event.preventDefault()

  await fetch(defaultPath).then(response => {
    response.json().then(data => {
      var userName_check = false
      
      //Runs the clients list verifying if it's regitered 
      data.forEach(client => {
        if (client.name == userName.value) {
          userName_check = true
          if (client.password != password.value) {
            alert('password incorreto!')
            
          } else {
            alert(`Seja bem vindo, ${userName.value}`)
            window.location.href = 'clients.html'
          }
        } 

      })
        
      if (!userName_check) {alert('clente não cadastrado')}
      
    })
      
  })

}

btsignUp.onclick = function() {
  window.location.href = 'client_register.html'
}