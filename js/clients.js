
const btRegister = document.querySelector('#btRegister')
const signupForm = document.querySelector('#signupForm')
const defaultPath = 'http://127.0.0.1:8080/api/clients'

signupForm.onsubmit = async function(event) {
  event.preventDefault()
  
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const fone = document.querySelector('#fone').value
  const address = document.querySelector('#address').value
  const password = document.querySelector('#password').value
  
  await fetch(defaultPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      fone,
      email,
      address,
      password
    })
    
  }).then(response => {
    response.json().then(data => {
      if (data.message === 'success') {
        alert('Cadastro realizado com sucesso!')
        signupForm.reset()
        window.location.href = 'index.html'
      } else {
        alert('Ops! Ocorreu um erro!')
      }
    })
  
  })
        
  
}

