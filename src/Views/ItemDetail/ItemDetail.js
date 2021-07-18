import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CounterContainer } from "../../components/counter/CounterContainer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});
export default function ItemDetail({data}) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <CounterContainer/>
        </CardActions>
      </Card>
    );
  }


