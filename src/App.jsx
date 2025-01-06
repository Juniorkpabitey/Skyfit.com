import React from 'react'
//import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Community from './components/Community'
import Founder from './components/Founder'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
//import 'react-toastify/dist/ReactToastify/css';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Community/>
      <Founder/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
