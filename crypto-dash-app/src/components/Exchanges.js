import React, {useState, useEffect} from 'react'; //rafce
import axios from 'axios';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { List, Card, Row, Col, Input, Avatar } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

// function Exch() {
//     const [coins, setCoins] = useState([])
//     useEffect(() => {
//         axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//         .then(res => {
//             setCoins(res.data);
//             console.log(res.data);
//         });
//     });

// }


const Exchanges = () => {
    const { data: cryptoList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptoList?.data?.name);

    // console.log(cryptoList);

    // console.log(cryptos);

    if(isFetching) return 'Loading...';



    // const [coins, setCoins] = useState([])
    // useEffect(() => {
    //     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //     .then(res => {
    //         setCoins(res.data);
    //         console.log(res.data);
    //     }).catch(error => console.log(error));
    // }, []);

    return (
        <div>
            <Row className="crypto-card-container">
                {cryptoList.map((coin) => (
                    <Col span={24} key={coin.id} className='coin-list-wrapper'>
                        <Row>
                            <Col span={3}><Avatar className="exchange-image" src={coin.image} /></Col>
                            <Col span={6}><strong>{coin.name}</strong></Col>
                            <Col span={6}>${millify(coin.total_volume)}</Col>
                            <Col span={6}>{millify(coin.price_change_percentage_24h)}</Col>
                        </Row>
                    </Col>

                    // <Col span={6}>{millify(coin.marketShare)}%</Col>



                    // <Col className="crypto-card" key={coin.id}>
                    //     <p>{coin.name}</p>
                    //     <Link to={`/crypto/${coin.id}`}>

                    //         <img className="coinlist-image" src={coin.image} alt="" />

                    //         <Card
                    //             title={`${coin.name}`}
                    //             >  
                    //             <img className="coinlist-image" src={coin.image} alt="" />
                    //             <p>Price: {coin.current_price}</p> 
                    //         </Card>
                    //     </Link>
                    // </Col>
                ))}
            </Row>
        </div>
    )
}

export default Exchanges
