import React, { useState } from 'react';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { EspacoBotao } from './styled';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const TextoBranco = withStyles((theme) =>({
    root: {
        color: "#FFFFFF"
    }
}))(Button);
const DadosVacinas = ({theme, voltarEtapa, aoEnviar, dados}) =>{
    const [nomeVacina, setNomeVacina] = useState(dados.nomeVacina);
    const [dataVacina, setDataVacina] = useState(dados.dataVacina); 
    return(
       <form 
       onSubmit={
           (event) =>{
               event.preventDefault();
               aoEnviar({nomeVacina, dataVacina});
           }
       }
       >
           <ThemeProvider theme={theme}>
           <TextField 
           id="vacina"
           label="Nome da Vacina"
           name="Nome da Vacina"
           variant="outlined"
           fullWidth
           type="text"
           color="primary"
           margin="normal"
           onChange={
               (event) =>{
                   setNomeVacina(event.target.value);
               }
           }
           />
           <TextField 
           id="dataVacina"
           name="Data de Aplicação"
           label="Data de Aplicação"
           margin="normal"
           type="date" 
           color="primary"
           fullWidth
           InputLabelProps={{
            shrink: true,
            }}
            onChange={
                (event) =>{
                    setDataVacina(event.target.value);
                }
            }
           />
           <EspacoBotao container direction="row" justifyContent="space-around">
            <TextoBranco
            size="large"
            variant="contained"
            type="button"
            color="primary"
            onClick={
                (event) =>{
                    event.preventDefault();
                    voltarEtapa();
                }
            }
            >
                Voltar
            </TextoBranco>
            <TextoBranco
            size="large"
            variant="contained"
            type="submit"
            color="primary"

            >
                Cadastrar
            </TextoBranco>
           </EspacoBotao>
           </ThemeProvider>
       </form>
    );
}

export default DadosVacinas;