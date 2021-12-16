import React, {useRef, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useGetCoinDetailsQuery} from '../services/coinGeckoApi';
import { Chart } from 'chart.js';
import HistoryChart from './HistoryChart';

const CoinDetails= () => {
    // const chartRef = useRef();
    // const {coinId} = useParams();
    // const [timePeriod, setTimeperiod] = useState('30');
    // const { data, isLoading } = useGetCoinDetailsQuery(coinId, timePeriod);
    // const cryptoDetails = data?.data?.coin;

    const renderData = () => {
        // if (isLoading) {
        //     <div>Loading data...</div>
        // }
        return (
            <div>
                <HistoryChart />
            </div>
        );
    };


    return renderData();
}

export default CoinDetails;
