import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Page1 from "./components/Page1/Page1"
import Page2 from "./components/Page2/Page2"
import Page3 from "./components/Page3/Page3"
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Nav></Nav>
    <Home></Home>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>

      
    </>
  )
}

export default App
