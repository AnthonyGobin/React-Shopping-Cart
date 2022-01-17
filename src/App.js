import * as React from 'react';
import { useQuery } from "react-query";
import {useState} from 'react'
import Header from './components/Header';
import Cart from './components/Cart';
import Item from './components/Item';
import Grid from '@material-ui/core/Grid';
import Container from '@mui/material/Container';
import Drawer from '@material-ui/core/Drawer';
import Box from '@mui/material/Box';


const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};


const App = () => {
  const { isLoading, data } = useQuery("products", getProducts);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const onAdd = (product) => {
    const exists = cartItems.find(item => item.id === product.id)
    if(exists){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...exists, qty: exists.qty + 1} : item))
    } else {
       setCartItems([...cartItems, {...product, qty:1}])
    }
  }

  const onRemove = (product) => {
    const exists = cartItems.find(item => item.id === product.id)
    if(exists.qty === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
       setCartItems(cartItems.map((item) => item.id === product.id ? {...exists, qty: exists.qty - 1} : item))
    }
  }

  if (isLoading) return 'Loading...'
  return (
    <Box sx={{flexGrow:1, mb:2}}>
      <Header  countCartItems={cartItems.length} onCartOpen={setCartOpen}/>
      <Container>
        <Grid container spacing={1}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item title={item.title} img={item.image} onAdd={onAdd} item={item}/>
            </Grid>
          ))}
        </Grid>
        
      </Container>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </Drawer>
    </Box>
  );
}

export default App;
