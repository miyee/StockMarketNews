import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
      marginTop: '2em' 
    },
});

const IndividualNews = ({news}) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    return (
        <div>
            <Card className={classes.root}>
                
                <Typography gutterBottom variant="h6" component="h2">
                   {news.title}
                </Typography>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        src={news.urlToImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {news.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={news.url} target="_blank" rel="noopener">
                        URL
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default IndividualNews;