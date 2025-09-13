import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import { useState,useEffect } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'
import LoginPage from "../pages/LoginPage";
import WishList from "../pages/WishList";
// import SignUpPage from "../pages/SignUpPage";
import SearchBar from '../components/SearchBar'
import FilterBar from "../components/FilterBar";
import Cart from "../pages/Cart";
import './App.css'
import MyAccount from "../components/MyAccount";
import MyDashboard from "../pages/MyDashboard";

function App() {

    const [products,setproducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const [categoryBar,setCategoryBar] = useState(true);

    const [user, setUser] = useState(null);
    
    const CategoryBar = () =>{
      setCategoryBar(!categoryBar)
    }

    const [searchItem,setSearchItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [cart, setCart] = useState([]);
    const [isMyAccount,setIsMyAccount] = useState(false);

      // Add to cart
    const addToCart = (product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };

    // Remove from cart
    const removeFromCart = (id) => {
      setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // Update quantity
    const updateQuantity = (id, change) => {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
      );
    };

    const [wishlist, setWishlist] = useState([]);

    // ✅ Add to wishlist
  const addToWishlist = (product) => {
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // ✅ Remove from wishlist
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const [orders, setOrders] = useState([]);

  // ✅ Add to Order

  const addOrder = (item) => {
    const updated = [...orders, item];
    setOrders(updated)
  }

      useEffect(()=>{
         const fetchProducts = async() =>{
          try{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(!response.ok){
              throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            setproducts(data)  
          }
          catch(err){
              setError(err.message);
    
          }
          finally{
              setLoading(false);
          }
         }
    
         fetchProducts()
      },[])

    
      if (loading) return <div class="flex items-center justify-center h-screen">
      <div class="w-10 h-10 border-4 border-[rgb(159,32,137)] border-t-transparent rounded-full animate-spin"></div>
      </div>; // loading message/spinner

      if (error) return <p className='flex items-center justify-center h-screen text-red-600 text-3xl'>Error: {error}</p>; // error message

      const categorybar = () =>{
        if(categoryBar == '200'){
          setCategoryBar('0')
        }
        else{
          setCategoryBar('200')
        }
      }

  return (
    <div className='relative overflow-hidden'>
    <nav className='h-[200px] lg:h-[100px] flex flex-col sm:flex-row justify-around items-center border-b-1 border-zinc-500 relative z-3 bg-[#ffffff]'>
      <p className='text-[#802c6e] text-xl sm:text-2xl md:text-3xl mt-[10px] sm:mt-0 font-[600]'>E_Commerce</p>
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/>
      <div className="flex gap-10 mt-[10px] sm:mt-0">
        <div className="flex flex-col items-center cursor-pointer">
          <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <h3 className='text-[16px] text-zinc-800'>Home</h3>
          </Link>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={CategoryBar}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect x="7" y="13" width="9" height="4" rx="1"></rect><rect x="7" y="5" width="12" height="4" rx="1"></rect></svg>
           <h3 className='text-[16px] text-zinc-800'>Category</h3>
        </div>
          
        
        <div className="cart flex flex-col items-center cursor-pointer">
          <Link to={"/cart"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
          <h3 className='text-[16px] text-zinc-800' onClick={()=>setIsMyAccount(false)}>Cart({cart.reduce((sum, item) => sum + item.quantity, 0)})</h3>
          </Link>
        </div>
      
         
        <div className="flex flex-col items-center cursor-pointer">
          {!user ? (
            <Link to="/login" className="flex flex-col items-center">
              <MdOutlineAccountCircle className="text-[25px]" />
              <h3 className="text-[16px] text-zinc-800">Login</h3>
            </Link>
          ) : (
            <div onClick={()=>{setIsMyAccount(!isMyAccount);;
            }} className="flex flex-col items-center">
              <img
                src={user?.picture || "/default-avatar.png"}
                alt={user.name}
                className="w-7 h-7 rounded-full object-cover"
              />
              <h3 className="text-[16px] text-zinc-800">{user.name}</h3>
            </div>
          )}
        </div>
        
      </div>
    </nav>

    <FilterBar  products={products} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categoryBar={categoryBar} CategoryBar={CategoryBar}/>

      <Routes>
        {/* Home / Product Listing */}
        <Route path="/" element={<ProductList products={products} searchItem={searchItem} selectedCategory={selectedCategory}/>} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}  addToWishlist={addToWishlist}/>} />

        {/*Login Page*/}
        <Route path="/login" element= {<LoginPage onLogin={setUser}/> } />
        
        {/* My DashBoard */}
        <Route path="/account/*" element={<MyDashboard  wishlist={wishlist} user={user} removeFromWishlist={removeFromWishlist} orders={orders} setOrders={setOrders} cart={cart}/>} />
          
        {/* {Cart} */}
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} setIsMyAccount={setIsMyAccount} addOrder={addOrder}/> }/>
      </Routes>

      <MyAccount isMyAccount={isMyAccount} setIsMyAccount={setIsMyAccount} user={user}/>
 
    </div>
  )
}

export default App
