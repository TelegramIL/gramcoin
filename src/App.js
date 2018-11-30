import React from "react";
import  Navigation  from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import  './styles/main.scss'

const App = () => (
  <div className='main-container'>
    <div className='main-container__navbar'>
      <Navigation/>
    </div>
    <div className='main-container__topbar'>
      <Header/>
    <div className='main-container__rightcon'>
      <Main/>
    </div>
    </div>
  </div>
);

export default App;