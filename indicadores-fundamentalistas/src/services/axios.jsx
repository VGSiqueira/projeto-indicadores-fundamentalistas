import axios from 'axios';

const api = axios.create (
    {
        baseURL: 'https://www.okanebox.com.br/api/analisefundamentalista/'
    }
)

export default api;