import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Digimons = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://digimon-api.herokuapp.com/api/digimon', {
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    return(
        <div>
            {data.map((digimon, key) => (
                <p key={key}>{digimon.name}</p>)
            )}
        </div>
    );
}
export default Digimons;