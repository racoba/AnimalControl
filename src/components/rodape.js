import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { BackRodape, ImageRodapeBoi } from './styled';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ImageRodape from '../assets/boirodape.svg'

const Rodape = () => {
  return (
    <BackRodape>
      <Grid
        container
        direction="column"
        style={{ flexWrap: "nowrap" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item  >
          <Grid container justifyContent="center">
            <ImageRodapeBoi src={ImageRodape} alt="LogoBoi" />
          </Grid>

        </Grid>
        <Grid item >
          <Typography>
            <CopyrightIcon />Reservado para o comp do senai
          </Typography>
        </Grid>

      </Grid>
    </BackRodape>

  );


}

export default Rodape;