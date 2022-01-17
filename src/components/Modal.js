import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MUImodal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const Modal = (props) => {
    const { item, onAdd } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <Box>
        <Button onClick={handleOpen}>Learn More</Button>
        <MUImodal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                    height: 250,
                    width: '100%',
                }}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {item.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item.description}
            </Typography>
            <Typography variant="h6" sx={{ flexGrow:1 }}>
                Price: ${item.price}
            </Typography>
            <Button onClick={() => onAdd(item)}>Add To Cart</Button>
        </Box>
        </MUImodal>
    </Box>
    )
}

export default Modal
