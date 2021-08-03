import React from 'react'
import { PaginaContainer, VacadDesenho } from '../components/styled'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import { TextField, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import VacaDesenhada from '../assets/vaca-desenho.svg';
import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { Botao } from '../components/styled'
import { Button } from '@material-ui/core'

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
                    <Typography variant="h4" display="inline">Esqueci minha senha</Typography>
                    <VacadDesenho src={VacaDesenhada} alt="Desenho da Vaca" />
                    <Grid style={{ width: "65%", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap" }}>
                        <Typography variant="h6" display="inline" align="center">Informe o seu Email ou usuário e em instantes você receberá um email com instruções para redifinir sua senha!</Typography>
                    </Grid>
                    <Grid style={{ width: "60%", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap" }}>
                        <form>
                            <Grid style={{ width: "100%" }}>
                                <TextField id="user" label="Usuário/Email" variant="outlined" margin="normal" style={{ width: "100%" }} />
                            </Grid>
                            <Botao>
                                <Grid style={{ display: "flex", justifyContent: "flex-end", flex: "2" }}>
                                    <Button variant="contained" style={{ backgroundColor: "#48c494", height: "45px" }}> Enviar </Button>
                                </Grid>
                            </Botao>
                        </form>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Rodape />
        </PaginaContainer >
    )
}