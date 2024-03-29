import React, { useState } from "react";
import './App.css';



function App() {
  const [meaning, setMeaning] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    let foundWord = divtionary.find(w => w.word.toLocaleLowerCase() === searchTerm.toLocaleLowerCase());
    if (foundWord) {
      setMeaning(foundWord.meaning);
    }
    else {
      setMeaning("Word not found in the dictionary.")
    }
  }
  return (
    <div >
      <h1>Dictionary App</h1>
      <div>
        <input onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a word..." />
        <button type="submit" onClick={handleSearch}>Search</button>
        <h4 style={{ marginTop: "0px" }}>Definition:</h4>
      </div>
      <div><p>{meaning}</p></div>
    </div>
  );
}

const divtionary =
  [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

  ]


export default App;
