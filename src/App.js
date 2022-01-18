import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import FollowersTab from './components/FollowersTab'

import { RiKeyboardBoxLine } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi'

import Minnin_logo from './img/Minnin_logo.png'

import './App.css'

function App() {
    return (
        <div>
            <header>
                <BrowserRouter>
                    <ul>
                        <li>
                            <span className="MenuIcons">
                                <img
                                    className="MenuIcons"
                                    src={Minnin_logo}
                                    alt="logo"
                                />
                            </span>
                            Home
                        </li>

                        <Link to="/Dashboard">
                            <li>
                                <span className="MenuIcons">
                                    <RiKeyboardBoxLine></RiKeyboardBoxLine>
                                </span>
                                Dashboard
                            </li>
                        </Link>

                        <Link to="/FollowersTab">
                            <li>
                                <span className="MenuIcons">
                                    <HiUserGroup></HiUserGroup>
                                </span>
                                Followers tab
                            </li>
                        </Link>
                    </ul>

                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route
                            path="/FollowersTab"
                            element={<FollowersTab />}
                        />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
