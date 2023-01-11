import { useState, useEffect } from 'react';
import DogCard from './DogCard';

import './App.css';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchDogs = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/husky/images`);
    const data = await response.json();

    console.log([data]);

    setDogs([data]);
  };

  useEffect(() => {
    searchDogs('Husky');
  }, []);

  return (
    <div className="app">
      <h1>Dogs Breeds</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for dog breeds"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://img.icons8.com/ios/512/search.png"
          alt="search"
          onClick={() => searchDogs(searchTerm)}
        />
      </div>

      {dogs?.length > 0 ? (
        <div className="container">
          {dogs.map((dog) => (
            <DogCard dog={dog} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
