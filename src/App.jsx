import './App.css'

//Essential
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

//components
import Loading from './component/Loading'

//pages
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

//pages from home
import Products from './pages/Home/pages_home/Products/Products';
import About from './pages/Home/pages_home/About/About';
import Tips from './pages/Home/pages_home/Tips/Tips';

//hooks
import { useAuthentication } from './hooks/useAuthentication'

//context
import { AuthProvider } from './context/AuthContext'
import { CartContextProvider } from './context/CartContext'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(user === undefined){
    return <Loading/>
  }
  
  return (
    <div className='App'>
      <AuthProvider value={{user}}>
        
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={!user ? <Login/>: <Navigate to="/home?q="/>}/>
              <Route path="/register" element={!user ? <Register/> : <Navigate to="/home?q="/>}/>
              
              <Route element={ <Home/> }>
                <Route path='/' element={<About/>}/>
                <Route path='/home' element={<Products/>}/>
                <Route path='/tips' element={<Tips/>}/>
              </Route>

            </Routes>
          </BrowserRouter>
        </CartContextProvider>
        
      </AuthProvider>
    </div>
  )
}

export default App
