const defaultPath = 'http://127.0.0.1:8080/api/products'

const productList = document.querySelector('#productList')
const header = document.querySelector('#list')
//--Menubar constructor
var menu = []
import("./constructor.js").then((module) => {
 module.menu.forEach(item=>{
  menu.push(item)
 })
})


async function getProducts() {
  await fetch(defaultPath).then((response) => {
  
    response.json().then(data => {
      data.forEach(item => {
        productList.innerHTML += `
          <li>
            <span class="code_span">${item.code}</span>
            <span class="name_span">${item.name}</span>
            <span class='price_span'>${item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
          </li>
        `
      })
    })
  })
}
            
    
getProducts()