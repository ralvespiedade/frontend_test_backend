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
    link: './produtos.html',
    address: 'http://127.0.0.1:5500/views/produtos.html'
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

//--HTML CONSTRUCTOR
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

async function getProducts() {
  await fetch(defaultPath).then((response) => {
  
    response.json().then(data => {
      data.forEach(item => {
        productList.innerHTML += `
          <li>
            <span class="name_price_span">${item.name}</span> <span>R$ ${item.price},00</span>
          </li>
        `
      })
    })
  })
}
            
    
getProducts()