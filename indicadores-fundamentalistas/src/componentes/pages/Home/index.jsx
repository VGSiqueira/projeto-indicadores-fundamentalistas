import Input from './../../Input'
import { useState } from 'react';
// import api from '../../../services/axios';
import Card from './../../Card'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([]);
    const [ticker, setTicker] = useState('');

    const loadData = async (e) => {
        e.preventDefault();
        axios.get(`https://www.okanebox.com.br/api/analisefundamentalista/${ticker.toUpperCase()}`)
            .then(response => setData(response.data))
        }

    return (
        <>
        <Input valorTicker={ticker} atualizaTicker={setTicker} loadData={loadData} />
        <Card info={data} />
        </>
    );

}

export default Home;
