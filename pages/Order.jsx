import React from 'react'

function Order({orders}) {
  console.log(orders);

   
  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#802c6e]">Order History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Order ID</th>
            <th className="text-left p-2">Product Image</th>
            <th className="text-left p-2">Product Name</th>
            <th className="text-center p-2">Quantity</th>
            <th className="text-right p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{order.id}</td>
              <td className="p-2 flex ml-10">
                <img className='w-5' src={order.image} alt="" />
              </td>
              <td className=" p-2">{order.title}</td>
              <td className="text-center p-2">{order.quantity}</td>
              <td className="text-right p-2">${(order.price)*(order.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Order