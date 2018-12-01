import React from "react";
import  Navigation  from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { SubmitForm } from './components/submit/SubmitGroup';
import  './styles/main.scss'

const App = () => (
    <div className='main-container'>
        <div className='main-container__navbar'>
          <Navigation/>
        </div>   
      <div className='main-container__right_container'>
        <div className='main-container__right_container__topbar'>
          <Header/>
        </div>
        <div>
          <SubmitForm/>
        </div>
        <div className='main-container__right_container__rightcon'>
          <Main/>
        </div>
      </div>
    </div>
);

export default App;