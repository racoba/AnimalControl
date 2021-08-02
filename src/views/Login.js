import React from 'react'
import { PaginaContainer, VacadDesenho } from '../components/styled'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import VacaDesenhada from '../assets/vaca-desenho.svg';
import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import FormLogin from '../components/formLogin'

const tema = createTheme({
    palette: {
        primary: green
    }
})


export default () => {
    return (
        <PaginaContainer style={{ height: "auto" }}>
            <NavBar />
            <ThemeProvider theme={tema}>
                <Grid style={{ display: "flex", flexDirection: "column", alignSelf: "center", width: "50%", alignItems: "center" }}>
                    <Typography variant="h4" display="inline">Realize seu Login:</Typography>
                    <VacadDesenho src={VacaDesenhada} alt="Desenho da Vaca" />
                    <FormLogin />
                </Grid>
            </ThemeProvider>
            <Rodape />
        </PaginaContainer >
    )
}