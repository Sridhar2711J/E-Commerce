import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Cart({cart,removeFromCart,updateQuantity,setIsMyAccount,addOrder}) {

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

  return (
    <>

    <div className={`mt-6 flex flex-col items-center justify-center gap-10 relative ${cart.length === 0 ?"h-110":"h-[100%]"}`}>
        <h2 className='text-[#802c6e] text-3xl font-[600] mt-4 bg-white'>Cart</h2>
         {
          cart.length === 0 ? (
            <p className="text-gray-600">Your Cart Is Empty</p>
          ) : (
            <ul className='ml-5 flex gap-20 flex-wrap list-none justify-center pb-10'>
              {
                cart.map((item)=>(
                  <li key={item.id} className="border-0 w-70 p-8 leading-7 rounded-2xl shadow-[0_0_5px_#656565] cursor-pointer hover:scale-106 transition duration-300 ease-in-out animate-fade-up">
                      <img className='w-50 h-50 object-contain' src={item.image} alt="" />
                      <p className='font-[500] li mt-3'>{(item.title).slice(0,20)+"...."}</p>
                      <p className='text-[#802c6e] font-[700]'>&#x20B9;{item.price}</p>
                      <div className='flex justify-between'>
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

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 cursor-pointer text-3xl"
                        >
                          🗑
                        </button>

                      </div>

                      <div className='flex items-center justify-between'>
                        <div className="mt-4 font-bold">
                          Total:&#x20B9;{(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button onClick={()=>{alert("Order Placed Succfully");addOrder(item)}} className="flex font-[600] mt-2 items-center px-5 h-9 border-0  rounded-[5px] bg-[rgb(159,32,137)] text-[#ffffff] cursor-pointer hover:bg-[rgb(122,23,106)]">
                          <IoIosArrowForward />
                          Buy
                        </button>
                      </div>
                  </li>
                ))
              }
            </ul>
          )

        
         }
    </div>
    </>
  )
}

export default Cart