import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from './Modal'


const Item = (props) => {
    const { title, img, onAdd, item} = props
    return (
    <Card sx={{ maxWidth: 345, height: 485, display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          sx={{ objectFit: 'cover'}}
          component="img"
          height="200"
          image={img}
          alt={title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'space-between'}}>
          <Button onClick={() => onAdd(item)} size="small">Add To Cart</Button>
          <Modal item={item} onAdd={onAdd}/>
        </CardActions>  
    </Card>
    )
}

export default Item
