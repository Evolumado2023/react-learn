import 'bootstrap/dist/css/bootstrap.css';
import Style from './css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Main from './components/Main';
import Imagens from './components/Imagens';
import { FaReact, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <nav className='nav justify-content-center d-flex'>
        <Router>
          <div className='App'>
            <li class="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li class="nav-item">
              <Link to='/contact'>Contact</Link>
            </li>
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} /> 
            <Route path='/contact' element={<Contact />} /> 
          </Routes>
        </Router>
      </nav>

      <Main />
      <Imagens />

      <h3>Icone</h3>
      <FaReact />
      <FaTwitter />
    </div>
  );
}

export default App;