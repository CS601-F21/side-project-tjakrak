import React, {useRef, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useGetCoinDetailsQuery} from '../services/coinGeckoApi';
import { Chart } from 'chart.js';

const CoinDetails= () => {
    const {data: coinData, isFetching} = useGetCoinDetailsQuery( 'bitcoin', 1);

    if(isFetching) return 'Loading...';
    console.log(coinData);

    const renderData = () => {
        // if (isLoading) {
        //     <div>Loading data...</div>
        // }
        return (
            <div>
            </div>
        );
    };


    return renderData();
}

export default CoinDetails;
