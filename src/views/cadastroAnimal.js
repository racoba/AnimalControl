import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { GridSession, PaginaContainer, TituloPagina } from '../components/styled';
import NavBar from '../components/navbar';
import Rodape from '../components/rodape';
import styled from 'styled-components';




const CadastroAnimal = () =>{
    
    
    return(
        
        <PaginaContainer>
            <NavBar />
            <TituloPagina variant="h2">Cadastro do Animal</TituloPagina>
            
            <Rodape />
        </PaginaContainer>
        

    );

}

export default CadastroAnimal;