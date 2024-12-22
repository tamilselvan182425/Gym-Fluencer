import About from './About';
import './App.css';
import Benefits from './Benefits';
import Footer from './Footer';

import Home from './Home';
import MapComponent from './Map';
import Navbar from './NavBar';
import Services from './Services';

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Benefits />
      <MapComponent />
      <Footer />
    </div>
  );
}

export default App;
