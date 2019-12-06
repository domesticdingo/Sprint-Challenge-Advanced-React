import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, initValue) => {
    const [data, setData] = useState(initValue);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])
    return data;
}

export default useAxios;