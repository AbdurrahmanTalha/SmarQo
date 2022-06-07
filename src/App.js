// import logo from './logo.svg';
import './App.css';
import './variable.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesPath from './components/routers/routes';
import Footer from './components/footer/Footer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesPath />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
