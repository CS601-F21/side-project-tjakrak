import React from 'react';
import { Button, Menu, Cryptography} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, StockOutlined, AlertOutlined, FundOutlined} from '@ant-design/icons';
import * as FaIcons from "react-icons/fa";

import logo from '../images/cryptologo.png'; // import image from images

// function Navbar() {}
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Link to="/">
                    <img src={logo} width="150" height="150" />
                </Link>
                <Link to="/" className='site-name-container'>
                    <h1>CryptoDash</h1>
                </Link>
            </div>
            <div className='nav-menus-container'>
                <Menu theme="light" mode="horizontal">
                {/* mode="horizontal"> */}
                    <Menu.Item icon={<HomeOutlined />} >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<StockOutlined />} >
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AlertOutlined />} >
                        <Link to="/news">News</Link>
                    </Menu.Item>
                    {/* <Menu.Item icon={<FundOutlined />} >
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item> */}
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
