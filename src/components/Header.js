import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import SideDrawer from './SideDrawer';
import SearchIcon from '@mui/icons-material/Search';
const useStyle=makeStyles((theme)=>({
    title: {
        flexGrow: 1
    },
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        //fontFamily: "Montserrat",
    },
}))
const Header = () => {
    const classes=useStyle()
    return (
        <>
        <Toolbar>
            <SideDrawer>
            <IconButton disableTouchRipple style={{color:"white"}}>
                <MenuIcon/>
            </IconButton>
            </SideDrawer>
            <Typography variant="h6" className={classes.title}>Blogging Website</Typography>
            <IconButton color="inherit">
                <SearchIcon/>
            </IconButton>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
                </Badge>
                </IconButton>
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
        </Toolbar>
        <Divider style={{backgroundColor:"white"}}/>
        <Toolbar className={classes.tagline}>Express your emotions through words</Toolbar>       
        </>
    )
}
export default Header