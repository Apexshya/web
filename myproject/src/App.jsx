import './index.css';
import './App.css'
import Navbar from './Components/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inspiration from './Components/Inspiration';
import Features from './Components/Features';
import Future from './Components/Future';
import Video from './Components/Video';


function App() {
  

  return (
    <>
    <Navbar/>
    <Video/>
    <Future/>
    <Features/>
    <Inspiration/>
    </>
  )
}

export default App
