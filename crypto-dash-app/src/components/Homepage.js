import React, { useContext, useState, useEffect } from 'react';
import { MyDashboardContext } from './MyDashboard';
import { Row, Col, Avatar } from 'antd';
import axios from "axios";


import TextInput from './TextInput';
import AddCoinTextInput from './AddCoinTextInput';

const Homepage = () => {
    
    const [coins, setCoins] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {dashboard} = useContext(MyDashboardContext);

    console.log(dashboard);


    useEffect( async () => {
        await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
            params: {
                ids: dashboard.join(","),
            }
        })
        .then(res => {
            setCoins(res.data);
        }).catch(error => console.log(error));
        setLoading(false);
    }, []);


    const handleClick = (coin) => {
        console.log(coin);
        dashboard(coin);
        // setIsActive(false);
    };


    //console.log(isLoading);
    if (isLoading) {
        return <div className="App">Loading...</div>;
    } else {
        return ( 
            <div>
                <AddCoinTextInput />
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={3}></Col>
                            <Col span={4}><strong>Coin</strong></Col>
                            <Col span={4}><strong>Buy Price</strong></Col>
                            <Col span={4}><strong>Current Price</strong></Col>
                            <Col span={4}></Col>
                            <Col span={4}><strong>%</strong></Col>
                        </Row>
                    </Col>
                    {coins.map((coin) => (
                        <Col span={24} key={coin.id} className="coin-list-wrapper">
                            <Row className="each-coin-row">
                                <Col span={3}><Avatar src={coin.image} /></Col>
                                <Col span={4}><strong>{coin.name}</strong></Col>
                                <Col span={4}>
                                    <input type="number">
                                    </input>
                                </Col>
                                <Col span={4}><strong>{coin.current_price}</strong></Col>
                                <Col span={4}>
                                    <form>
                                        <button type="submit">Calculate</button>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>  
        )
    }
}

export default Homepage
