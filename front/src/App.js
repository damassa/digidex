import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Header from './components/Header'; 
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [digimon, setDigimon] = useState(data);
  const [search, setSearch] = useState("");
  
    useEffect(() => {
        axios.get('https://digimon-api.herokuapp.com/api/digimon', {
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [digimon]);
  
  return (
    <div className="App">
      <Header />
      <div className="search">
          <div className="input-container">
            <input
              onChange={e => {
              const test = data.filter(digimon => {
                return digimon.name.toLowerCase().includes(e.target.value.toLowerCase());
              });
              console.log("test: ", test);
              setDigimon(test);
              setSearch(e.target.value);
            }}
          type="text"
          value={search} placeholder="Search"
          />
        </div>
      </div>
      <div className="container">
        <div className="card-container">
          {digimon.map((item ,i)=> (
            <div className="card">
              <div className="nome">{item.name}</div>
              <div className="imagem">
                <img src={item.img} alt={item.name} title={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;