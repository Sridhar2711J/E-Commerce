import React from 'react'

function Order({orders}) {
  return (
    <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">📦 Orders</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.date}</td>
                <td className="border p-2">{item.status}</td>
                <td className="border p-2">₹{item.total}</td>
                <td className="border p-2">
                  <button
                    className="text-blue-600"
                    onClick={() => setSelectedOrder(item)}
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
  )
}

export default Order