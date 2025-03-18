import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
