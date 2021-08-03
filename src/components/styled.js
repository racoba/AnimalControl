import React from 'react'
import { Grid, Button } from '@material-ui/core'
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
    flex:1;
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
    height: 100%;
`
export const ImageRodapeBoi = styled.img`
    width: 50%
`
export const VacadDesenho = styled.img`
    width: 20%;
    max-width: 100%;
    margin-top: 0%;
    margin-bottom: 0%
`

export const Botao = styled(Grid)`
    margin-top: 0.2%;
    margin-bottom: 3%;
    display: flex;
    width: 100%;
`