import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos';
import Contato from './Pages/Contato';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Projetos' element={<Projetos />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  ); 
}

export default App;
