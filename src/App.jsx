import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/home'
import Cart from './component/cart'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
