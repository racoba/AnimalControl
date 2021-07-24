import React from 'react'
import { Link } from 'react-router-dom'
import { CaixaTopicos, PaginaContainer, GridSession} from '../components/styled'
import ListaAnimais from '../components/listaAnimaisCadastrados'
import NavBar from '../components/navbar'
import ListaAdm from '../components/listaADM'
import AddIcon from '@material-ui/icons/Add';
import addImage from '../assets/plus.svg'
import { Button, Grid } from '@material-ui/core'
import Rodape from '../components/rodape'

export default () => {
    return (
        <PaginaContainer>
            <NavBar />
            <GridSession id="teste" style={{ marginTop: "1%" }}>
                <CaixaTopicos >
                    Animais Cadastrados
                </CaixaTopicos>
                
                    <ListaAnimais id="lala" />
                    
                {/* <Button style={{height:"20%"}}  component={Link} to="/">
                    <img src={addImage}></img>
                </Button> */}
            </GridSession>


            <GridSession>
                <CaixaTopicos >
                    Administração
                </CaixaTopicos>

                {/* <ListaAdm /> */}

            </GridSession>
            
            <Rodape />
        </PaginaContainer>
        
    )
}