import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      Width: 300,
    },
    media: {
      height: 300,
      width: 300,
    },
  });
  export default function ShowItem({product}) {
      const classes = useStyles();
    
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.img}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Price: {product.price}$
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Link to={`/detail/${product.id}`}><Button size="small" color="primary">
              See More
            </Button></Link>
          </CardActions>
        </Card>
      );
    }
  
  
  
