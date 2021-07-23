import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import InsertChartSharpIcon from '@material-ui/icons/InsertChartSharp';
import EventSharpIcon from '@material-ui/icons/EventSharp';
import { Grid, IconButton } from '@material-ui/core';

export default () => {
    return(
        <Grid style={{justifyContent:"space-evenly", width:"100%"}}>
            <IconButton   >
                <MonetizationOnIcon />
            </IconButton>
            <IconButton    >
                <InsertChartSharpIcon />
            </IconButton>
            <IconButton    >
                <EventSharpIcon />
            </IconButton>
        </Grid>
    )
}