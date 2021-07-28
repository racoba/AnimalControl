import React from 'react'
import { PaginaContainer } from '../components/styled'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core'
import styled from 'styled-components';
import { Grid } from '@material-ui/core'
import VacaDesenhada from '../assets/vaca-desenho.svg';
import '@fontsource/roboto';

const VacadDesenho = styled.img`
    width: 100%;
    max-width: 100%;
    margin-top: 3.25%;
`

export default () => {
    return (
        <PaginaContainer>
            <NavBar />
            <Grid container justifyContent="center">
                <Grid container justifyContent="center">
                    <Typography variant="h4">Realize seu Login:</Typography>
                    <VacadDesenho src={VacaDesenhada} alt="Desenho da Vaca" />
                    <Grid container justifyContent="center">
                        <form>
                            <TextField id="user" label="Usuário/Email" variant="outlined" size="small" />
                        </form>
                    </Grid>
                    <Grid container justifyContent="center">
                        <form>
                            <TextField id="password" label="Senha" type="password" variant="outlined" size="small" />
                        </form>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button variant="contained" style={{ backgroundColor: "#48c494" }}> Enviar </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Rodape />
        </PaginaContainer>
    )
}