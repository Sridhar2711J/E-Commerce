import React from 'react'

function Cart({cart,isCartOpen,setIsCartOpen,removeFromCart,updateQuantity,setIsMyAccount}) {

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

  return (
    <div
      className={`top-50  lg:top-28 right-0 rounded-[5px] w-80 bg-[#ffffff] shadow-[0_1px_5px_black] p-4  absolute z-4 animate-fade-left transition duration-300 ${
        isCartOpen ? "translate-x-[-2px]" : "translate-x-2000"
      }`}
    >
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button onClick={() => {setIsCartOpen(false)}} className='cursor-pointer'>✖</button>
      </div>

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="mt-4 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1 px-2">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-gray-500">&#x20B9;{item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 bg-gray-200 rounded cursor-pointer"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 bg-gray-200 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 cursor-pointer"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 font-bold">
            Total:&#x20B9;{totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart