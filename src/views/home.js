import React from 'react'
import { Box, Button, Container, Grid, Typography, createTheme } from '@material-ui/core'
import './home.css'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import styled from 'styled-components'
import { green } from '@material-ui/core/colors'
import { ContainerForm, PaginaContainer } from '../components/styled'
import { ThemeProvider } from '@material-ui/styles'
import ListaCardObj from '../components/listaCardObj'





const TelaHome = () =>{
    return(
        <PaginaContainer style={{height:"auto"}}>
            <NavBar />
            <ContainerForm maxWidth="lg" style={{backgroundColor: green[600], minWidth:"100%"}}>
                <Typography 
                align="center" 
                display="block"
                variant="h4"
                >
                    Entre para o AnimalControl
                </Typography>
                <Typography
                align="center"
                display="block"
                variant="h6"
                style={{marginTop: "2.5%"}}
                >
                    Deixe o nosso sistema ajudar você ha administrar
                    a sua fazenda de um jeito melhor
                </Typography>
                <Grid 
                    direction="row" 
                    justifyContent="center"
                    container
                >
              
                        <Grid item style={{margin:"2.5%", display:"flex", flexDirection:"column"}} >
                            
                            <Typography variant="subtitle1" align="center">
                                Já tem uma conta?
                            </Typography>
                           
                                <Button variant="contained" style={{color: "#000000", backgroundColor: "#ffffff"}} size="large">
                                    Entrar na Conta
                                </Button>
                         
                        </Grid>
                        <Grid item style={{margin:"2.5%", display:"flex", flexDirection:"column"}}>
                            <Typography variant="subtitle1" align="center">
                                Não tem conta ainda?
                            </Typography>
                           
                                <Button variant="contained" style={{color: "#000000", backgroundColor: "#ffffff"}} size="large">
                                    Criar uma Conta
                                </Button>
                            
                            
                        </Grid>
                </Grid>
            </ContainerForm>
            <ListaCardObj />
            <Rodape />
        </PaginaContainer>
    );

}
export default TelaHome;




