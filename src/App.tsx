import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {

  return (
    <div className="wrapper">
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
