import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'
import './App.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <Header/>
        <Footer/>
      </div>
    </>
  )
}

export default App
