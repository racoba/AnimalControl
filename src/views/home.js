import React from 'react'
import { Box, Button, Container, Grid, Typography, createTheme, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import './home.css'
import NavBar from '../components/navbar'
import Rodape from '../components/rodape'
import styled from 'styled-components'
import { green } from '@material-ui/core/colors'
import { ContainerForm, PaginaContainer } from '../components/styled'
import { ThemeProvider } from '@material-ui/styles'
import ListaCardObj from '../components/listaCardObj'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ImgBoi from '../assets/boizao.svg'




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
            <Grid style={
                {   
                backgroundColor: "#40C193" ,
                paddingBottom:"5%" ,
                paddingTop: "5%",
                display: "flex", 
                flexDirection: "column", 
                flexWrap: "wrap", 
                alignItems: "center"
                }
            }>
                <Typography
                variant="h4"
                display="block"
                align="center"
                >
                    Quem somos?
                </Typography>
                <Grid style={{maxWidth: "25%", display: "flex", flexDirection:"row", alignItems:"center", justifyContent: "center"}}>
                    <Typography 
                    variant="subtitle1"
                    display="block"
                    align="center"
                    style={{padding: "5.5%"}}
                    >
                        Somos uma empresa capacitada que busca sempre inovação
                        nas nossas ideias, por isso criamos o AnimalControl, uma ideia
                        nova que vai te dar varios beneficios.RACOOOOBAAAAA.
                    </Typography>
                    <img src={ImgBoi} alt="Boi Preto" style={{paddingLeft: "5.5%", marginLeft: "10%"}}/>
                </Grid>
            </Grid>
            <Grid style={{backgroundColor: "#99C193" ,display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                <Typography
                variant="h4"
                display="block"
                align="center"
                >Objetivos, Resultados e Funcionalidades</Typography>
                <Typography
                variant="subtitle1"
                display="block"
                align="center"
                >
                    Como ja dito antes, iremos facilitar a administração
                    da sua fazenda, para isso disponibilizamos algumas funcionalidades
                    como:    
                </Typography>
            
                <List>
                    <ListSubheader component="div" id="list-funcionalidades">
                        Funcionalidades
                    </ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowForwardIosOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Gravar Animais"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowForwardIosOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ficha dos Animais"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowForwardIosOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resumo dos Dados Gerais"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowForwardIosOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resumo da Produtividade"/>
                    </ListItem>
                </List>
                <Typography>
                    Então, para finalizar, queremos que sua fazenda aumente em cerca
                    de 15% a sua produtividade durante 1 ano, com isso se junte a ANIMALCONTROL.
                    BAAAAALDOOOOOOO
                </Typography>
            </Grid>
            <Rodape />
        </PaginaContainer>
    );

}
export default TelaHome;




