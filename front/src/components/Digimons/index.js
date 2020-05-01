import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css'
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
        <div className="container">
            <div class="card-container">
                {data.map((index) => (
                    <div className="card">
                        <div className="nome">{index.name}</div>
                        <div className="imagem">
                            <img src={index.img} alt={index.name} title={index.name}/>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    );
}
export default Digimons;