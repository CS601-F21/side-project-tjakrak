import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3';

const createRequest = (url) => ({url});

export const coinGeckoApi = createApi({
    reducerPath: 'coinGeckoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        }),
        getCoinDetails: builder.query({
            query: (coinId, timePeriod) => createRequest(`/coins/${coinId}/market_chart?vs_currency=usd&days=${timePeriod}`),
        }),
        getCoinPrice: builder.query({
            query: (coinId) => createRequest(`/simple/price?ids=${coinId}&vs_currencies=usd`)
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCoinDetailsQuery,
    useGetCoinPriceQuery,
} = coinGeckoApi;
