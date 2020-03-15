import React, {useState} from 'react';
import {convertISODateToMMDDYYY} from '../../../common/utils'

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
      marginTop: '2em' 
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
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
                <CardActions className={classes.cardActions}>
                    <Typography variant="caption" color="textSecondary" component="p">
                        Published: {convertISODateToMMDDYYY(news.publishedAt)}
                    </Typography>
                    <Link href={news.url} target="_blank" rel="noopener">
                        <IconButton color="primary" aria-label="launch to url" component="span" >
                                <LaunchIcon fontSize="small"/>
                        </IconButton>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default IndividualNews;