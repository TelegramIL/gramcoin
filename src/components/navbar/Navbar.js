import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { SubmitForm } from '../submit/SubmitGroup';
import { Main } from '../main/Main';
import { Header } from '../header/Header';
import '../../styles/main.scss'


const Navigation = () => (
    <BrowserRouter>
        <Route render={({ location, history }) => (
            <div className='main-container'>
                <div className='main-container__navbar'>
                    <SideNav style={{backgroundColor: '#0088cc'}}
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="submit">
                                <NavIcon>
                                    <i className="fa fa-fw fa-plus-square" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Submat Group
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <div className='main-container__right_container'>
                     <div className='main-container__right_container__topbar'>
                        <Header/>
                    </div>
                    <main>
                        <Route path="/" exact component={props => <Main />} />
                        <Route path="/home" component={props => <Main />} />
                        <Route path="/submit" component={props => <SubmitForm />} />
                    </main>
                </div>
            </div>
        )}
        />
</BrowserRouter>
);


export default Navigation;