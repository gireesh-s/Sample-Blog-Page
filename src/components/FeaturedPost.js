import { makeStyles } from '@material-ui/core';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const useStyles=makeStyles({
    cover:{
        backgroundImage: 'url(https://images.unsplash.com/photo-1635282373533-fddb9c1a7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80)',
        backgroundPosition: "center",
        padding: "35px 25px",
    },
    textContainer:{
        color:"black",
    },
});
const FeaturedPost = () => {
    const classes=useStyles();
    return (
        <Card className={classes.cover} style={{backgroundColor:"#262626"}}>
            <CardContent className={classes.textContainer}>
                <Typography variant="h3" component="h4" gutterBottom>Title of a longer featured blog post</Typography>
                <Typography variant="h5" component="h2">
                Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" size="large" disableElevation style={{color:"black", fontWeight:700}}>
                    Read More..
                </Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost