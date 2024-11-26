import { useState } from 'react'  
import './App.css'
import Header from './components/header/Header'
import BodyCompo from './components/body/BodyCompo'
import FooterCompo from './components/footer/FooterCompo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <BodyCompo />
      <FooterCompo />
    </div>
  )
}

export default App
