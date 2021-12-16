import React, {useState, useEffect} from 'react'; //rafce
import { useParams } from "react-router-dom";
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar } from 'antd';

import { useGetCoinDetailsQuery } from '../services/coinGeckoApi';

const HistoryChart = () => {
    // const { coinId } = useParams();
    // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    // const { coinData } = useGetCoinDetailsQuery( {coinId}, 7);
    const coinData = useGetCoinDetailsQuery( 'bitcoin', 7);
    const [isLoading, setIsLoading] = useState(false);

    const [cd, setcd] = useState([]);

    // console.log(coinData.data);
  
    // const chartRef = useRef()

    setcd(coinData.data.market_caps);
    useEffect(() => {

    })
    return (
        <div>
            {/* {coinData.prices.map((price) => (
                <Col span={24} key={price} className="coin-list-wrapper">
                    <Row className="each-coin-row">
                        <Col>{price}</Col>
                    </Row>
                </Col>
                // setcd(price)
            ))} */}
            HISTORY CHART
        </div>
    )
};

export default HistoryChart
