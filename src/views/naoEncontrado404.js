import React from 'react';
import { GridSession, PaginaContainer } from '../components/styled';
import NavBar from '../components/navbar';
import { Grid, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import Boi404 from '../assets/boi404.svg';
import styled from 'styled-components';
import Rodape from '../components/rodape';
const ImagemBoi = styled.img`
    width: 100%;
    max-width: 100%;
    margin-top: 3.25%;
`
const naoEncontrado404 = () =>{
    return(
        <PaginaContainer>
            <NavBar />
            <GridSession>
                <Grid container justifyContent="center" style={{height: "60%"} } direction="row">
                    <ImagemBoi src ={Boi404} alt="Boi com interrogação"/>
                </Grid>
                <Grid container justifyContent="center" style={{height: "40%", marginTop: "10%"}}>
                    <Typography  variant="h5" style={{fontSize: "36px"}}>Ops! Página não encontrada</Typography>
                </Grid>
                
            </GridSession>
            <Rodape />
        </PaginaContainer>

    );


}

export default naoEncontrado404;