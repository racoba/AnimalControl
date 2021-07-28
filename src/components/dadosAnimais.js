
import React from 'react';
import {  TextFieldVerde } from './styled';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Theme, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: green,
    },
});
const DadosAnimais = () =>{
    return(
        <form>
            <ThemeProvider theme={theme}>
            <TextField 
            id="nomeAnimal"
            label="Nome do Animal"
            name="nome"
            type="text"
            size="medium"
            variant="outlined"
            fullWidth
            margin="normal"
            

            />
            <TextField
            id="descricao"
            label="Descrição do Animal"
            name="descricao"
            size="medium"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            />
            <TextField 
            id="peso"
            name="peso"
            type="number"
            label="Peso do Animal"
            margin="normal"
            
            InputProps={{startAdornment: <InputAdornment position="start">Kg</InputAdornment>}}
            variant="outlined"
            />
        
            <TextField 
                style={{marginTop: 10, marginLeft: 50}}
                id="dataDeNascimento"
                name="Data de Nascimento"
                label="Data de Nascimento"
                type="date"
                InputLabelProps={{
                shrink: true,
                }}
            />
            

               
            </ThemeProvider>
        </form>
    );
}
export default DadosAnimais;