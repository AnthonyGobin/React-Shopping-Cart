import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from '@mui/material/Box';

const Header = (props) => {
    const {countCartItems, onCartOpen} = props;
    return (
        <Box sx={{ display: 'flex', flexGrow: 1, mb:10}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="div" >React Shop</Typography>
                    </Box>
                    <IconButton variant="h6" onClick={() => onCartOpen(true)}>{countCartItems ? (`Cart ${countCartItems}`) : ( 'Cart' )}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
