import React from 'react'
import { Grid, Button, Typography, TextField, Container } from '@material-ui/core'
import styled from 'styled-components'

export const CaixaTopicos = styled(Grid)`
    display:flex;
    align-items: center;
    background-color: #40C193;
    width:40%;
    height:35px;
    text-align:left;
    padding-left: 20px;
    border-radius: 0px 20px 20px 0px;
    font-size: 24px;
    color: white;
`

export const PaginaContainer = styled(Grid)`
    display:flex;
    flex: 1;
    flex-direction: column ;
`
export const GridSession = styled(Grid)`
    margin-left: 1%;
    
`

export const BotaoNavb = styled(Button)`
    color:white !important
    
`
export const BackRodape = styled.footer`
    background-color: #40C193;
    width: 100%;
    
    
`
export const ImageRodapeBoi = styled.img`
    width: 50%;
`
export const TituloPagina = styled(Typography)`
    text-align: center;
    height: 20%;
`
export const ContainerForm = styled(Container)`
    padding-top: 4%;
`
export const EspacoBotao = styled(Grid)`
margin: 3% 0;  
`