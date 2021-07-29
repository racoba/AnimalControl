import React from 'react';
import { ContainerForm, PaginaContainer, TituloPagina } from '../components/styled';
import NavBar from '../components/navbar';
import { Container } from '@material-ui/core';
import FormularioCadatro from '../components/formularioCadastro';
import styled from 'styled-components';
import Rodape from '../components/rodape';



const CadastroAnimal = () =>{
    return(
        
            <PaginaContainer style={{height: "auto"}}>
                <NavBar />
                <ContainerForm maxWidth="sm" component="article">
                    <TituloPagina variant="h2">Cadastro do Animal</TituloPagina>
                    <FormularioCadatro />
                </ContainerForm>
                <Rodape />
            </PaginaContainer>
        

    );
}
export default CadastroAnimal;