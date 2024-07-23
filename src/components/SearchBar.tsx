import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa o ícone de pesquisa
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (ingredients: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <FaSearch className="search-bar-icon" />
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Digite os ingredientes..."
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
