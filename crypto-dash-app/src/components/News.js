import React, {useState, useEffect} from 'react'; //rafce
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, Loading3QuartersOutlined } from '@ant-design/icons';


import { useGetNewsQuery } from '../services/newsApi';

const News = () => {
    const { data: newsList, isFetching } = useGetNewsQuery();

    console.log(newsList);
    if (!newsList?.articles) return 'Loading...'; 

    return (
    <Row className="news-card-container">
        {newsList.articles.map((article) => (
            <Col span={24} className="coin-list-wrapper">
                <Row key={article.id}>
                    <a href={article.url}>
                    {/* <Col span={3}><Avatar className="exchange-image" src={coin.image} /></Col> */}
                    <Col span={8}><strong>{article.title}</strong></Col>
                    </a>
                    <Col span={8}>{article.description}</Col>
                    {/* <Col span={5}>${millify(coin.current_price)}</Col>
                    <Col span={5}>
                        <span className={coin.price_change_percentage_24h < 0 ? "percentage-loss" : "percentage-gain"}>
                            {coin.price_change_percentage_24h < 0 ? <CaretDownOutlined /> : <CaretUpOutlined />}
                            {millify(coin.price_change_percentage_24h)} %
                        </span>
                    </Col> */}
                </Row>
            </Col>
        ))}
    </Row>
    );
}

export default News
