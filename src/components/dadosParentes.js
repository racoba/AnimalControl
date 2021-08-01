import { Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import '@fontsource/roboto';
import styled, { ThemeProvider } from 'styled-components';
import { withStyles } from '@material-ui/styles';
import { EspacoBotao } from './styled';
const nomesMae = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Revolta'
];
const nomesPai = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard'
];

const BotaoTextoBranco = withStyles((theme) =>({
    root: {
      color: "#FFFFFF",
    }
}))(Button);
const DadosParentes = ({ theme, voltarEtapa, aoEnviar, dados }) => {
  const [mae, setMae] = useState(dados.mae);
  const [pai, setPai] = useState(dados.pai);
  
  return (
    <form onSubmit={(event) =>{
      event.preventDefault();
      aoEnviar({mae, pai});
    }}>
      <ThemeProvider theme={theme}>

        <Typography variant="h5" display="block">Selecione a mãe</Typography>
        <Typography variant="body1" display="inline" style={{ fontWeight: "bold" }}>Observação: </Typography>
        <Typography variant="body1" display="block">
          Para selecionar a mãe deve-se cadastrar
          o animal anteriormente
        </Typography>
        <TextField
          select
          id="maeaaaaaaaaaaaaaaaaaaaaa"
          label="Selecione a mãe"
          fullWidth
          size="medium"
          defaultValue=""
          variant="outlined"
          margin="normal"
          SelectProps={{
            native: true,
          }}
          onChange={(event) =>{
            setMae(event.target.value);
          }}
        >
          <option aria-label="Nada" value="" />
          {nomesMae.map((nome) => (
            <option id="lalala" key={nome} value={nome} style={{ height: "auto" }}>{nome}</option>
          ))}

        </TextField>

        <Typography variant="h5" display="block">Selecione o Pai</Typography>
        <Typography variant="body1" display="inline" style={{ fontWeight: "bold" }}>Observação: </Typography>
        <Typography variant="body1" display="block">
          Para selecionar o pai deve-se cadastrar
          o animal anteriormente
        </Typography>
        <TextField
          select
          variant="outlined"
          margin="normal"
          fullWidth
          label="Selecione o pai"
          size="medium"
          id="pai"
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          onChange={(event) =>{
            setPai(event.target.value);
          }}
        >
          <option aria-label="Nada" value="" />
          {nomesPai.map((nome) => (
            <option key={nome} value={nome}>{nome}</option>
          ))}
        </TextField>
        <EspacoBotao container direction="row" justifyContent="space-around">
          <BotaoTextoBranco 
          size="large" 
          variant="contained" 
          color="primary" 
          type="button" 
          onClick={(event) =>{
            event.preventDefault();
            voltarEtapa();
          }}>
            Voltar
          </BotaoTextoBranco>
          <BotaoTextoBranco  size="large" variant="contained" color="primary" type="submit">Próximo</BotaoTextoBranco>
        </EspacoBotao>
        
      </ThemeProvider>
    </form>


  );

}
export default DadosParentes;