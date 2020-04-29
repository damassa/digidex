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
        <>
            <div className="logo">
                <img src="https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: 10}}>
                {data.map((index, key) => (
                    <div className="card">
                        <div className="nome">{index.name}</div>
                        <div className="imagem">
                            <img src={index.img} />
                        </div>
                    </div>
                    )
                )}
            </div>
        </>
    );
}
export default Digimons;