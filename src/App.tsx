import './App.css';
import ScrollToTopButton from './components/TopButton/TopButton';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
