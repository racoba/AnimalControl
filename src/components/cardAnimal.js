import React from 'react'
import { Grid, Typography } from '@material-ui/core'


export default ({ quantM, quantF, img, tipoAnimal }) => {
    return (
        <Grid item style={{ height: "20%"}}>
            <img src={img} alt="x" />
            <Typography align="center" variant="h6" style={{height:"40%"}}>
                {tipoAnimal}
            </Typography>
            <Grid container direction="row" justifyContent="space-around">
                <Grid item  >
                    <Typography style={{ color: "#113DDA" }} variant="h6" > {quantM}  </Typography>
                </Grid>
                <Grid item  >
                    <Typography style={{ color: "#EB17D6" }} variant="h6" > {quantF} </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}