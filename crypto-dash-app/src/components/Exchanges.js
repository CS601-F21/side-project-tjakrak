import React, {useState, useEffect} from 'react'; //rafce
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Avatar } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { useGetCryptosQuery } from '../services/coinGeckoApi';

const Exchanges = () => {
    const { data: cryptoList, isFetching } = useGetCryptosQuery();

    if(isFetching) return 'Loading...';

    return (
        <div>
            <Row className="crypto-card-container">
                <Col span={24} className="coin-list-wrapper">
                    <Row>
                        <Col span={3}></Col>
                        <Col span={5}><strong>Coin</strong></Col>
                        <Col span={5}><strong>Total Volume</strong></Col>
                        <Col span={5}><strong>Price</strong></Col>
                        <Col span={5}><strong>%</strong></Col>
                    </Row>
                </Col>
                {cryptoList.map((coin) => (
                    <Col span={24} key={coin.id} className="coin-list-wrapper">
                        <Link to={`/crypto/${coin.id}`}>
                            <Row className="each-coin-row">
                                <Col span={3}><Avatar className="exchange-image" src={coin.image} /></Col>
                                <Col span={5}><strong>{coin.name}</strong></Col>
                                <Col span={5}>${millify(coin.total_volume)}</Col>
                                <Col span={5}>${millify(coin.current_price)}</Col>
                                <Col span={5}>
                                    <span className={coin.price_change_percentage_24h < 0 ? "percentage-loss" : "percentage-gain"}>
                                        {coin.price_change_percentage_24h < 0 ? <CaretDownOutlined /> : <CaretUpOutlined />}
                                        {millify(coin.price_change_percentage_24h)} %
                                    </span>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Exchanges
