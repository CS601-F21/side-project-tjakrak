import React from 'react';
import { Button, Menu, Cryptography, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import * as FaIcons from "react-icons/fa";

import logo from '../images/cryptologo.png'; // import image from images

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <ul>
                <li>
                    <Link to="/">
                        <img src={logo} width="200" height="200" />
                    </Link>
                    <div className='dashboard-container'>
                        <Link to="/">
                            <h1>CryptoDash</h1>
                        </Link>
                    </div>
                    <div className='menus-container'>
                        <Menu theme="dark">
                        {/* mode="horizontal"> */}
                            <Menu.Item icon={<HomeOutlined />} >
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item icon={<FundOutlined />} >
                                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                            </Menu.Item>
                            <Menu.Item icon={<MoneyCollectOutlined />} >
                                <Link to="/exchanges">Exchanges</Link>
                            </Menu.Item>
                            <Menu.Item icon={<BulbOutlined />} >
                                <Link to="/news">News</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
