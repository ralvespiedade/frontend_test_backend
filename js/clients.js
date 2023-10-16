const ordersHistory = document.querySelector('#ordersHistory')
const defaultPathOrders = 'http://127.0.0.1:8080/api/orders'

//puxar o id do cliente de um elemento escondido, que precisarei colocar.

async function getOrders() {
  await fetch(defaultPathOrders).then(response => {
    
    response.json().then(data => {
      console.log(data.orders)
      data.orders.forEach(order => {
        
        ordersHistory.innerHTML += `
          <li>
            <div>${order.order_date} - ${order.order_status}</div>
          </li>
        `
      })
      
    })
      
  })

}

getOrders()

