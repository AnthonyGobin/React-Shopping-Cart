import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

const Cart = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.qty, 0);
    const taxPrice = itemsPrice * 0.13;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
    <Box>
        {cartItems.length === 0 && <div>Empty Cart</div>}
        <List sx={{ width: '100%', maxWidth: 'auto', bgcolor: 'background.paper' }}>
        {cartItems.map(item => (
            <ListItem key={item.id}>
            <Box sx={{ display: 'flex', flexGrow:1, justifyContent: 'space-between'}}>
                <Box sx={{ display: 'flex' }}>
                    <ListItemAvatar>
                        <Avatar
                            alt={item.title}
                            src={item.image}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={item.title} sx={{ mr: 2}}/>               
                </Box>
                <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
                    <ListItemText primary={`${item.qty} x ${item.price.toFixed(2)}`} sx={{ mr: 2}}/>
                    <Button 
                        size="small"
                        disableElevation
                        variant="text"
                        onClick={() => onRemove(item)}
                        >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button 
                        size="small"
                        disableElevation
                        variant="text"
                        onClick={() => onAdd(item)}>
                        +
                    </Button>
                </Box>                
            </Box>
            </ListItem>
        ))}  
        </List>
        <Divider></Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8">Base: ${itemsPrice.toFixed(2)}</Typography>
            <Typography variant="h8">Tax: ${taxPrice.toFixed(2)}</Typography>
            {cartItems.length === 0 ? <Typography variant="h8">Shipping: $0.00</Typography> :<Typography variant="h8">Shipping: ${shippingPrice.toFixed(2)}</Typography>}
            {cartItems.length === 0 ? <Typography  variant="h6">Total: $0.00</Typography> :<Typography  variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>}
        </Box>

    </Box>
    )
}

export default Cart



