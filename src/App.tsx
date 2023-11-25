import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {

  return (
    <div className="wrapper">
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Main />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
