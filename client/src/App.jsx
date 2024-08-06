import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'


const App = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/all-books' element={<AllBooks/>}></Route>
      <Route  path='/Login' element={<Login/>}></Route>
      <Route  path='/Signup' element={<Signup/>}></Route>
      <Route  path='/Cart' element={<Cart/>}></Route>
      <Route  path='/Profile' element={<Profile/>}></Route>
      <Route path="/all-books/view-book-details/:id" element={<ViewBookDetails/>}></Route>
    </Routes>
    
    <Footer/>
    </Router>
      
    
      
    </div>
  )
}

export default App
