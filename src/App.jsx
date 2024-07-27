import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Content/>
     <Footer/>
    </>
  )
}

export default App
