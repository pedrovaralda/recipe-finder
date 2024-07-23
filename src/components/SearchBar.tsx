import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (ingredients: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { t } = useTranslation(); // Hook para tradução
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder={t('search_placeholder')} // Texto traduzido
      className="search-bar"
    />
  );
};

export default SearchBar;
