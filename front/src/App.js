import React from 'react';
import Header from './components/Header'; 
import Digimons from './components/Digimons';
import Search from './components/Search';

function App() {
  return (
   <div className="App">
     <Header />
     <Search />
     <Digimons />
   </div>
  );
}

export default App;