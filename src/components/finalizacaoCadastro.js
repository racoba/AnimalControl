import { Button, ThemeProvider, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { EspacoBotao } from './styled';

const TextoBranco= withStyles((theme) =>({
    root: {
        color: "#FFFFFF"
    }
}))(Button);
const FinalizacaoCadastro = ({theme}) =>{
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Typography
                paragraph={true}
                variant="h4"
                display="block"
                >
                    Obrigado por cadastrar seu Animal no nosso site!
                </Typography>
                <EspacoBotao container direction="row" justifyContent="center">
                    <TextoBranco
                    size="large"
                    type="button"
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/menu-adm"
                    >Ir para a pagina inicial</TextoBranco>
                </EspacoBotao>
            </ThemeProvider>
        </div>
    );


}

export default FinalizacaoCadastro;