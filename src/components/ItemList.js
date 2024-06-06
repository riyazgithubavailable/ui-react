import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const ItemList = ({ searchQuery }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (loading) {
    return <CircularProgress className="loading-spinner" />;
  }

  return (
    <List className="item-list">
      {filteredItems.map(item => (
        <ListItem key={item.id} className="item-list-item">
          <ListItemText primary={item.title} secondary={item.body} />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;
