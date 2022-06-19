import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles=makeStyles({
    card:{
        display: "flex",
    },
    cardDetails:{
        flex: 1
    },
    cardMedia:{
        width: 160
    }
});
const PostCard = ({post}) => {
    const classes=useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card} style={{backgroundColor:"#262626",color:"white"}}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography component="subtitle1" color="silver">
                                {post.date}
                            </Typography><br/>
                            <Typography component="subtitle1" paragraph>
                                {post.description}
                            </Typography><br/>
                            <Typography component="subtitle1" style={{color:"wheat"}}>
                                Continue Reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle}/>
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard
