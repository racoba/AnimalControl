import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { Botao } from './styled'
import '@fontsource/roboto';


export default () => {
    return (
        <Grid style={{ width: "60%", display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap" }}>
            <form>
                <Grid style={{ width: "100%" }}>
                    <TextField id="user" label="Usuário/Email" variant="outlined" margin="normal" style={{ width: "100%" }} />
                </Grid>
                <Grid style={{ width: "100%" }}>
                    <TextField id="password" label="Senha" type="password" variant="outlined" style={{ width: "100%" }} />
                </Grid>
                <Grid style={{ flexDirection: "row", flexWrap: "nowrap" }}>
                    <Botao>
                        <Typography variant="h8" display="inline" style={{ fontFamily: "roboto", color: "#2050f4", flex: "2", marginTop: "3%" }} >Esqueceu sua senha?</Typography>
                        <Grid style={{ display: "flex", justifyContent: "flex-end", flex: "2" }}>
                            <Button variant="contained" style={{ backgroundColor: "#48c494", height: "45px" }}> Enviar </Button>
                        </Grid>
                    </Botao>
                </Grid>
            </form>
        </Grid>
    )
}