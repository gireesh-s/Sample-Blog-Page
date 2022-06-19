import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    footer:{
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(4),
        padding: theme.spacing(6, 0),
    }
}))
const Footer = ({description,title}) => {
    const classes=useStyles();
    return (
        <footer className={classes.footer} style={{backgroundColor: "#262626"}}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="white" component="p">
                    {description}
                </Typography>
                <Typography variant="body2" color="white" align="center">
                    Copyright <CopyrightIcon/>{" . "}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{" . "}
                    {new Date().getFullYear()}.
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
