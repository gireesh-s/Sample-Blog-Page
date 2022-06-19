import { makeStyles } from '@material-ui/core';
import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
    sidebarSection: {
      marginTop: theme.spacing(9),
    },
  }));
const Sidebar = ({ archives, description, social, title, feedback }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox} style={{backgroundColor:"#262626",color:"white"}}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection} style={{marginTop:28}}>
                Archives
            </Typography>
            {
            archives.map((archive)=>(
                <Link display="block" variant="body1" href={archive.url} key={archive.title}>
                    {archive.title}
                </Link>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection} style={{marginTop:18}}>
                Social
            </Typography>
            {social.map((network)=>(
                <Link display="block" variant="body1" href="#" key={network.name}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item>
                            <network.icon/>
                            </Grid>
                            <Grid item>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    )
}

export default Sidebar
