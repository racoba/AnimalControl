import React from 'react'
import { PaginaContainer, VacadDesenho } from '../components/styled'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import { TextField, Typography, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import VacaDesenhada from '../assets/vaca-desenho.svg';
import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { Botao } from '../components/styled'

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
                    <Typography variant="h4" display="inline">Redefinir senha</Typography>
                    <VacadDesenho src={VacaDesenhada} alt="Desenho da Vaca" />
                    <Grid style={{ width: "65%", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap" }}>
                        <Typography variant="h6" display="inline" align="center">Digite a nova senha que será utilizada para acessar o serviço:</Typography>
                    </Grid>
                    <Grid style={{ width: "60%", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap" }}>
                        <form>
                            <Grid style={{ width: "100%" }}>
                                <TextField id="user" label="Nova Senha" type="password" variant="outlined" margin="normal" style={{ width: "100%" }} />
                            </Grid>
                            <Grid style={{ width: "100%" }}>
                                <TextField id="password" label="Confirmar Senha" type="password" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid style={{ flexDirection: "row", flexWrap: "nowrap" }}>
                                <Botao>
                                    <Grid style={{ display: "flex", justifyContent: "flex-end", flex: "2" }}>
                                        <Button variant="contained" style={{ backgroundColor: "#48c494", height: "45px" }}> Enviar </Button>
                                    </Grid>
                                </Botao>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Rodape />
        </PaginaContainer >
    )
}