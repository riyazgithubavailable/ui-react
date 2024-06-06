import React, { useState } from 'react';
import { Container } from '@mui/material';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ItemList searchQuery={searchQuery} />
    </Container>
  );
};

export default App;
