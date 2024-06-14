import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Client/Pages/HomePage"
import Navbar from "./Client/Components/Header/Navbar"
import MenuProducts from "./Client/Components/Products/MenuProducts"
import Cart from "./Client/Pages/Cart/Cart"
import SignUp from "./Client/Pages/Auth/SignUp"
import DataProvider from "./Client/Context/DataProvider"
import Login from "./Client/Pages/Auth/Login"
import Profile from "./Client/Pages/Profile/Profile"
import Orders from "./Client/Pages/Orders/Orders"
import SearchFirm from "./Client/Pages/SearchFirm/SearchFirm"
import Offers from "./Client/Pages/Offers/Offers"
import Help from "./Client/Pages/Help/Help"
import OrderSuccess from "./Client/Pages/OrderSuccess/OrderSuccess"
import Footer from "./Client/Components/Footer/Footer"





const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:firmId" element={<MenuProducts/>} />
        <Route path="/search" element={<SearchFirm/>}/>
        <Route path="/offers" element={<Offers/>} />
        <Route path="/help" element={<Help/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/order-success" element={<OrderSuccess/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
    </DataProvider>
  )
}

export default App
