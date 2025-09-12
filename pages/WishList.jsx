import React from 'react'

function WishList({wishlist,removeFromWishlist}) {
  return (
    <div>
       <section className="mt-6 flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#802c6e] text-3xl font-[600] mt-4 bg-white">💖 Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty</p>
        ) : (
          <ul className="ml-5 flex gap-20 flex-wrap list-none justify-center">
            {wishlist.map((item) => (
              <li key={item.id} className="border-0 w-70 p-8 leading-7 rounded-2xl shadow-[0_0_5px_#656565] cursor-pointer hover:scale-106 transition duration-300 ease-in-out animate-fade-up">
                <img className='w-50 h-50 object-contain' src={item.image} alt="" />
                <p className='font-[500] li mt-3'>{(item.title).slice(0,20)+"...."}</p>
                <p className='text-[#802c6e] font-[700]'>&#x20B9;{item.price}</p>
                <p className='text-zinc-400'>{item.category}</p>
                <button
                  className="text-red-500 text-sm cursor-pointer"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default WishList