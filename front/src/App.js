import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Digimons from './components/Digimons';
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredDigimon, setFilteredDigimon] = useState(data);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        axios.get('https://digimon-api.herokuapp.com/api/digimon', {
        })
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    useEffect(() => { 
      setFilteredDigimon(
        data.filter(digimon =>
          digimon.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, data]);

    if (loading) {
      return <p>Loading digidex..</p>;
    }
  
  return (
    <div className="App">
      <div className="header">
        <div className="headerContainer">
          <div className="logo">
            <img src="https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/8/8b/Digimon-digital-monsters-521097d1f3a6f.png/revision/latest?cb=20170801165602" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search"
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container">
        {filteredDigimon.map((digimon,index) =>(
          <Digimons key={index} {...digimon}/>
        ))}
      </div>
    </div>
  );
}

export default App;