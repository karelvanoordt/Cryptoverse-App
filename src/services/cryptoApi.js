import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '44ebf2ddf8msh571d26131656751p19f6e1jsn0f876e530388'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const CryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery = fetchBaseQuery({ baseUrl }),
    endpoints = (builder) => ({
        getCrypto: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     
// };


