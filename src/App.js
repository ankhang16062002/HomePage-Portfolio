import './App.scss';
import {useState} from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Introduct from './components/introduct/Introduct'
import Portfolio from './components/portfolio/Portfolio'
import Slider from './components/slider/Slider'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="home-porfolio">
      <Header openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
      <Menu openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
      <div className = 'sections'>
        <Introduct />
        <Portfolio />
        <Slider />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
