import React from 'react'

function SearchBar({searchItem,setSearchItem}) {
  return (
    <div className='flex relative'>
        <svg className='absolute w-4 top-3 lg:top-2 left-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        <input className='border-1 outline-0 text-[rgb(53,53,67)] border-[rgb(53,53,67)] shadow-md w-[300px] lg:w-[800px]  h-[30px] lg:h-[40px] mt-[10px] sm:mt-0 rounded-sm pl-8 pr-5 caret-[rgb(159,32,137)]' type="search" placeholder='Enter Product Name' value={searchItem} onChange={(e)=>{setSearchItem(e.target.value);console.log(searchItem);
        }}/>
    </div>
  )
}

export default SearchBar