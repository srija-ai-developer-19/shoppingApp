import { useState, useEffect } from 'react'
import './App.css'

const products = [
  { id: 1, name: "Coffee Mug Set of 2", brand: "HomeCentre", price: 299, original: 599, off: "50% OFF", rating: 4.6, cat: "Home", img: "☕", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)" },
  { id: 2, name: "Modern Desk Lamp", brand: "Philips", price: 599, original: 999, off: "40% OFF", rating: 4.4, cat: "Home", img: "💡", bg: "linear-gradient(135deg,#f6d365,#fda085)" },
  { id: 3, name: "Wall Clock Antique", brand: "Casio", price: 699, original: 1299, off: "46% OFF", rating: 4.2, cat: "Home", img: "🕰️", bg: "linear-gradient(135deg,#e0c3fc,#8ec5fc)" },
  { id: 4, name: "Soft Pillow", brand: "SleepyCat", price: 499, original: 999, off: "50% OFF", rating: 4.5, cat: "Home", img: "🛏️", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" },
  { id: 5, name: "Plant Pot Ceramic", brand: "Ugaoo", price: 249, original: 499, off: "50% OFF", rating: 4.3, cat: "Home", img: "🪴", bg: "linear-gradient(135deg,#d4fc79,#96e6a1)" },
  { id: 6, name: "Photo Frame", brand: "Random", price: 349, original: 699, off: "50% OFF", rating: 4.1, cat: "Home", img: "🖼️", bg: "linear-gradient(135deg,#f6d365,#fda085)" },
  { id: 7, name: "Kitchen Knife Set", brand: "Prestige", price: 799, original: 1499, off: "46% OFF", rating: 4.6, cat: "Home", img: "🔪", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
  { id: 8, name: "Water Bottle Steel", brand: "Milton", price: 399, original: 799, off: "50% OFF", rating: 4.7, cat: "Home", img: "🧴", bg: "linear-gradient(135deg,#a8edea,#fed6e3)" },
  { id: 9, name: "Dining Chair", brand: "HomeCentre", price: 1299, original: 2599, off: "50% OFF", rating: 4.2, cat: "Home", img: "🪑", bg: "linear-gradient(135deg,#cfd9df,#e2ebf0)" },
  { id: 10, name: "Scented Candle", brand: "Bath & Body", price: 299, original: 599, off: "50% OFF", rating: 4.8, cat: "Home", img: "🕯️", bg: "linear-gradient(135deg,#fff1eb,#ace0f9)" },
  { id: 11, name: "Bedsheet King Size", brand: "Bombay Dyeing", price: 899, original: 1799, off: "50% OFF", rating: 4.4, cat: "Home", img: "🛌", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" },
  { id: 12, name: "Curtains Set", brand: "HomeCentre", price: 1199, original: 2399, off: "50% OFF", rating: 4.3, cat: "Home", img: "🪟", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)" },
  { id: 13, name: "Mixer Grinder", brand: "Preethi", price: 2499, original: 4999, off: "50% OFF", rating: 4.6, cat: "Home", img: "🥣", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
  { id: 14, name: "Dinner Set", brand: "La Opala", price: 1499, original: 2999, off: "50% OFF", rating: 4.5, cat: "Home", img: "🍽️", bg: "linear-gradient(135deg,#d4fc79,#96e6a1)" },
  { id: 15, name: "Door Mat", brand: "Saral", price: 199, original: 399, off: "50% OFF", rating: 4.1, cat: "Home", img: "🧶", bg: "linear-gradient(135deg,#a8edea,#fed6e3)" },
  { id: 16, name: "Soap Dispenser", brand: "Plantex", price: 349, original: 699, off: "50% OFF", rating: 4.2, cat: "Home", img: "🧼", bg: "linear-gradient(135deg,#e0c3fc,#8ec5fc)" },
  { id: 17, name: "Towel Set", brand: "Trident", price: 599, original: 1199, off: "50% OFF", rating: 4.4, cat: "Home", img: "🛁", bg: "linear-gradient(135deg,#fff1eb,#ace0f9)" },
  { id: 18, name: "Storage Box", brand: "Cello", price: 449, original: 899, off: "50% OFF", rating: 4.3, cat: "Home", img: "📦", bg: "linear-gradient(135deg,#f6d365,#fda085)" },
  { id: 19, name: "Indoor Plant", brand: "Ugaoo", price: 299, original: 599, off: "50% OFF", rating: 4.7, cat: "Home", img: "🌿", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)" },
  { id: 20, name: "Lantern Light", brand: "Homesake", price: 799, original: 1599, off: "50% OFF", rating: 4.5, cat: "Home", img: "🏮", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)" },
  { id: 21, name: "Wireless Headphones", brand: "Sony", price: 2999, original: 4999, off: "40% OFF", rating: 4.5, cat: "Electronics", img: "🎧", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" },
  { id: 22, name: "Smart Watch", brand: "Apple", price: 4999, original: 8999, off: "44% OFF", rating: 4.8, cat: "Electronics", img: "⌚", bg: "linear-gradient(135deg,#cfd9df,#e2ebf0)" },
  { id: 23, name: "Bluetooth Speaker", brand: "JBL", price: 1499, original: 2999, off: "50% OFF", rating: 4.7, cat: "Electronics", img: "🔊", bg: "linear-gradient(135deg,#d4fc79,#96e6a1)" },
  { id: 24, name: "Laptop Stand", brand: "Portronics", price: 1299, original: 1999, off: "35% OFF", rating: 4.5, cat: "Electronics", img: "💻", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)" },
  { id: 25, name: "Gaming Mouse", brand: "Logitech", price: 899, original: 1799, off: "50% OFF", rating: 4.4, cat: "Electronics", img: "🖱️", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" },
  { id: 26, name: "Power Bank", brand: "Mi", price: 1199, original: 1999, off: "40% OFF", rating: 4.6, cat: "Electronics", img: "🔋", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)" },
  { id: 27, name: "Earbuds", brand: "Boat", price: 999, original: 1999, off: "50% OFF", rating: 4.3, cat: "Electronics", img: "🎵", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
  { id: 28, name: "Keyboard", brand: "Dell", price: 1999, original: 3499, off: "43% OFF", rating: 4.5, cat: "Electronics", img: "⌨️", bg: "linear-gradient(135deg,#e0c3fc,#8ec5fc)" },
  { id: 29, name: "Running Shoes", brand: "Nike", price: 1999, original: 3499, off: "43% OFF", rating: 4.3, cat: "Fashion", img: "👟", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
  { id: 30, name: "Backpack", brand: "Wildcraft", price: 899, original: 1799, off: "50% OFF", rating: 4.2, cat: "Fashion", img: "🎒", bg: "linear-gradient(135deg,#a8edea,#fed6e3)" },
  { id: 31, name: "Sunglasses", brand: "RayBan", price: 799, original: 1599, off: "50% OFF", rating: 4.1, cat: "Fashion", img: "🕶️", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)" },
  { id: 32, name: "T-Shirt", brand: "Roadster", price: 499, original: 999, off: "50% OFF", rating: 4.3, cat: "Fashion", img: "👕", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" },
  { id: 33, name: "Handbag", brand: "Lavie", price: 1299, original: 2599, off: "50% OFF", rating: 4.4, cat: "Fashion", img: "👜", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)" },
  { id: 34, name: "Cap", brand: "Puma", price: 299, original: 599, off: "50% OFF", rating: 4.2, cat: "Fashion", img: "🧢", bg: "linear-gradient(135deg,#d4fc79,#96e6a1)" },
  { id: 35, name: "Dress", brand: "Biba", price: 1899, original: 3799, off: "50% OFF", rating: 4.6, cat: "Fashion", img: "👗", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])
  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("Home")
  const [live, setLive] = useState(false)
  const [idx, setIdx] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [showAddress, setShowAddress] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [orders, setOrders] = useState([])
  const [loginError, setLoginError] = useState("")
  const [address, setAddress] = useState({ name:"", phone:"", pincode:"", locality:"", address:"", city:"", state:"", type:"Home" })

  useEffect(() => {
    if(!live) return
    const t = setInterval(()=>setIdx(i=>(i+1)%products.length), 2000)
    return ()=>clearInterval(t)
  },[live])

  const handleLogin = () => {
    if(!email.trim()){
      setLoginError("⚠️ Please enter Email / Mobile number! 😊")
      alert("😊 Oops! Please enter Email / Mobile number!")
      return
    }
    if(!password.trim()){
      setLoginError("⚠️ Please enter Password! 😊")
      alert("😊 Oops! Please enter Password!")
      return
    }
    if(email.length < 3){
      setLoginError("⚠️ Enter valid Email! 😊")
      alert("😊 Please enter valid Email!")
      return
    }
    setLoginError("")
    setUserName(email.split('@')[0])
    setIsLoggedIn(true)
  }

  const filtered = products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()) && (cat==="All" || p.cat===cat))
  const totalPrice = cart.reduce((s,i)=>s+i.price,0)
  const totalSaving = cart.reduce((s,i)=>s+(i.original-i.price),0)

  const placeOrder = () => {
    if(!address.name || !address.phone || !address.address){ alert("😊 Please fill Name, Phone & Address!"); return; }
    const newOrder = { id: Date.now(), items: [...cart], total: totalPrice, address: {...address}, date: new Date().toLocaleString() }
    setOrders([...orders,newOrder])
    setCart([]); setShowAddress(false); setShowCart(false); setShowSuccess(true)
    setTimeout(()=>setShowSuccess(false),4000)
  }

  if(!isLoggedIn){
    return(
      <div className="login-wrap">
        <div className="login-box-new">
          <div className="login-left">
            <h1>SHOPSY 🛍️</h1>
            <h2>Login 😊</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <div className="login-illust">
              <div className="smiley-row">😊🛒💃✨🎉</div>
              <p className="illust-title">Big Fashion Sale Live! 🔥</p>
              <p className="illust-sub">35+ Products Waiting For You!</p>
              <div className="smiley-big">😍 🥰 🤩</div>
              <small>Login cheyandi - Shopping start cheyandi! 😊</small>
            </div>
          </div>
          <div className="login-right">
            <h3 className="login-head">Welcome Back! 😊</h3>
            {loginError && <div className="error-box">{loginError}</div>}
            <input placeholder="Enter Email / Mobile number 😊" value={email} onChange={e=>{setEmail(e.target.value); setLoginError("")}} />
            <input type="password" placeholder="Enter Password 🔒" value={password} onChange={e=>{setPassword(e.target.value); setLoginError("")}} />
            <button className="login-btn-main" onClick={handleLogin}>Login 😊</button>
            <p className="or">OR</p>
            <button className="otp-btn" onClick={()=>alert("😊 OTP sent! (Demo)")}>Request OTP 📱</button>
            <span className="hint-new">New to Shopsy? Create an account 😊<br/>Any email works for demo 😉</span>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      <header className="top-header">
        <div className="logo">SHOPSY</div>
        <div className="search"><input placeholder="🔍 Search 35+ products" value={search} onChange={e=>setSearch(e.target.value)} /></div>
        <div className="right">
          <span className="hi">Hi, {userName} 👋</span>
          <button className="live-btn" onClick={()=>setLive(!live)}>{live?"Shop":"Live"}</button>
          <span className="icon-pill">❤️ {wish.length}</span>
          <span className="icon-pill cart-pill" onClick={()=>setShowCart(true)}>🛒 {cart.length}</span>
          <button className="logout" onClick={()=>setIsLoggedIn(false)}>Logout</button>
        </div>
      </header>

      <nav className="cat-row">{["Home","All","Electronics","Fashion"].map(c=>(<button key={c} className={cat===c?"cat-active":""} onClick={()=>setCat(c)}>{c}</button>))}</nav>

      <section className="banner-fixed"><div className="banner-text"><h1>🏠 Home Festival - 35 Products - Up to 70% OFF</h1><p>Starting from ₹199 • Free Delivery</p></div></section>

      {live ? (
        <div className="live-box"><h2>🔴 LIVE - 35 PRODUCTS</h2><div className="card big-card"><div className="img" style={{background:products[idx].bg}}>{products[idx].img}</div><div className="info"><b>{products[idx].brand}</b><p>{products[idx].name}</p><span>⭐ {products[idx].rating}</span><div className="prices"><b>₹{products[idx].price}</b><s>₹{products[idx].original}</s><i>{products[idx].off}</i></div><button onClick={()=>setCart([...cart,products[idx]])}>ADD TO BAG</button></div></div></div>
      ) : (
        <div className="grid">{filtered.map(p=>(<div key={p.id} className="card"><div className="heart" onClick={()=>setWish(w=>w.includes(p.id)?w.filter(x=>x!==p.id):[...w,p.id])}>{wish.includes(p.id)?"❤️":"🤍"}</div><div className="img" style={{background:p.bg}}>{p.img}</div><div className="info"><b>{p.brand}</b><p>{p.name}</p><span>⭐ {p.rating} | 1.2k</span><div className="prices"><b>₹{p.price}</b><s>₹{p.original}</s><i>{p.off}</i></div><button onClick={()=>setCart([...cart,p])}>ADD TO BAG</button></div></div>))}</div>
      )}

      {showCart && (
        <div className="cart-overlay" onClick={()=>setShowCart(false)}>
          <div className="cart-drawer" onClick={e=>e.stopPropagation()}>
            <div className="cart-head"><h3>🛒 My Bag ({cart.length})</h3><button onClick={()=>setShowCart(false)}>✕</button></div>
            {cart.length===0 ? <div className="empty-cart"><div className="empty-icon">🛒</div><h4>Your bag is empty</h4></div> :
            <><div className="cart-items">{cart.map((item,i)=>(<div key={i} className="cart-item"><div className="cart-img" style={{background:item.bg}}>{item.img}</div><div className="cart-details"><b>{item.brand}</b><p>{item.name}</p><div className="prices"><b>₹{item.price}</b></div></div><button className="remove-btn" onClick={()=>setCart(cart.filter((_,idx)=>idx!==i))}>🗑️</button></div>))}</div>
              <div className="cart-bill"><div className="bill-row"><span>Subtotal</span><span>₹{totalPrice+totalSaving}</span></div><div className="bill-row green"><span>Discount</span><span>-₹{totalSaving}</span></div><div className="bill-row"><span>Delivery</span><span className="green">FREE</span></div><div className="bill-row total"><span>Total</span><span>₹{totalPrice}</span></div><button className="checkout-btn" onClick={()=>{setShowCart(false);setShowAddress(true)}}>PLACE ORDER • ₹{totalPrice}</button></div></>}
          </div>
        </div>
      )}

      {showAddress && (
        <div className="address-overlay">
          <div className="address-box">
            <div className="address-head"><h3>📦 Delivery Address</h3><button onClick={()=>setShowAddress(false)}>✕</button></div>
            <div className="address-form">
              <div className="form-row"><input placeholder="Full Name *" value={address.name} onChange={e=>setAddress({...address,name:e.target.value})} /><input placeholder="10-digit mobile *" value={address.phone} onChange={e=>setAddress({...address,phone:e.target.value})} /></div>
              <div className="form-row"><input placeholder="Pincode *" value={address.pincode} onChange={e=>setAddress({...address,pincode:e.target.value})} /><input placeholder="Locality *" value={address.locality} onChange={e=>setAddress({...address,locality:e.target.value})} /></div>
              <textarea placeholder="Address (Area and Street) *" value={address.address} onChange={e=>setAddress({...address,address:e.target.value})}></textarea>
              <div className="form-row"><input placeholder="City *" value={address.city} onChange={e=>setAddress({...address,city:e.target.value})} /><input placeholder="State *" value={address.state} onChange={e=>setAddress({...address,state:e.target.value})} /></div>
              <div className="address-type"><span>Address Type</span><div className="type-btns">{["Home","Work"].map(t=><button key={t} className={address.type===t?"type-active":""} onClick={()=>setAddress({...address,type:t})}>{t}</button>)}</div></div>
              <div className="form-actions"><button className="cancel-btn" onClick={()=>setShowAddress(false)}>CANCEL</button><button className="save-btn" onClick={placeOrder}>SAVE AND DELIVER HERE 😊</button></div>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box-fixed">
            <div className="tick">✅</div><h2>Order Placed Successfully! 😊🎉</h2><p>Thank you! Your order will be delivered soon. 🥳</p><div className="order-id-box">Order ID: #{orders[orders.length-1]?.id}<br/><small>{orders[orders.length-1]?.address.name} - {orders[orders.length-1]?.address.city} 😊</small></div>
            <button className="ok-btn" onClick={()=>setShowSuccess(false)}>Continue Shopping 🛍️</button>
          </div>
        </div>
      )}
    </div>
  )
}
export default App