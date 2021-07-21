import React from 'react'
import { Grid } from '@material-ui/core'
import { CaixaTopicos, PaginaContainer } from '../components/styled'
import ListaAnimais from '../components/listaAnimaisCadastrados'

export default () => {
    return (
        <PaginaContainer>
            <Grid  direction="column">
                <CaixaTopicos item>
                    Animais Cadastrados
                </CaixaTopicos>
                <Grid item>
                    <ListaAnimais/>
                </Grid>
            </Grid>

            <Grid container style={{alignSelf:"center"}}>
                <CaixaTopicos item>
                    Administração
                </CaixaTopicos>
            </Grid>
        </PaginaContainer>
    )
}