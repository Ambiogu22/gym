import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Schedule from './Components/Schedule'
import Gallery from './Components/Gallery'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Pricing from './Components/Pricing'
import Classes from './Components/Classes'
import NavBar from './NavBar'
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/classes' element={<Classes />} />
        </Routes>
      </Router>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
