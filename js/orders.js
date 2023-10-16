
const header = document.querySelector('#list')

var menu = []

import("./constructor.js").then((module) => {
 module.menu.forEach(item=>{
    menu.push(item)
 })
})





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