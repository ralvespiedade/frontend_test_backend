const defaultPath = 'http://127.0.0.1:8080/api/products'

const productList = document.querySelector('#productList')
const header = document.querySelector('#list')

const menu = [

  {
    name: 'Clientes',
    link: './clientes.html',
    address: 'http://127.0.0.1:5500/views/clientes.html'
  },
  {
    name: 'Produtos',
    link: './products.html',
    address: 'http://127.0.0.1:5500/views/products.html'
  },
  {
    name: 'Pedidos',
    link: './pedidos.html',
    address: 'http://127.0.0.1:5500/views/pedidos.html'
  },
  {
    name: 'Gerenciamento',
    link: './adm.html',
    address: 'http://127.0.0.1:5500/views/adm.html'
  }
]

//--Header constructor
menu.forEach(op => {

  if (window.location.href == op.address) {
    header.innerHTML += `
      <li class="selected">
        <a href=${op.link}>${op.name}</a>
      </li>
    `
  } else {
    
    header.innerHTML += `
      <li>
        <a href=${op.link}>${op.name}</a>
      </li>
    `
  }
  
})




