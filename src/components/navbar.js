import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { BotaoNavb } from './styled'
import MenuDrawer from './navDrawerMenu'
import { Link } from "react-router-dom";


export default function ButtonAppBar() {

    return (
        <Grid style={{ height: "73px", backgroundColor: "#40C193" }}>
            <AppBar position="static" color="transparent">
                <Toolbar>

                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Grid style={{ marginRight: "2%" }}>
                        <BotaoNavb component={Link} to="/" color="inherit" >Home</BotaoNavb>
                        <BotaoNavb color="inherit" >Perfil</BotaoNavb>
                        <BotaoNavb color="inherit" >Contato</BotaoNavb>
                    </Grid>
                    <MenuDrawer />
                </Toolbar>
            </AppBar>
        </Grid>
    );
}


