import { Box, Button, createTheme, Step, StepIcon, StepLabel, Stepper, Typography, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuCadastroAdm from '../views/MenuCadastroAdm';
import DadosAnimais from './dadosAnimais';
import DadosParentes from './dadosParentes';
import DadosVacinas from './dadosVacina';
import FinalizacaoCadastro from './finalizacaoCadastro';
import { ThemeProvider } from '@material-ui/styles';
const CaixaBorda = styled(Box)`
border: 1px solid;    
border-radius: 8px;
padding: 5%;
`
const theme = createTheme({
  palette: {
    primary: green,
  }
  
})
const LabelSteps = [
  "Informações do Animal",
  "Selecione os Parentes do Animal",
  "Adicione a Vacina tomada"
]

const FormularioCadatro = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});
  useEffect(() =>{
    console.log(dados);
  })
  function proximaEtapa(){
    setEtapaAtual(etapaAtual + 1);
  }
  function voltarEtapa(){
    setEtapaAtual(etapaAtual - 1);
  }
  function coletarDados(Dados){
    console.log("chegou aq");
    setDados({...dados, ...Dados});
    console.log("passou so set dados e foi");
    if(etapaAtual != 2){
        proximaEtapa();
    }else{
      console.log(dados);
    }
    
  }
  const DadosFormulario = [
    <DadosAnimais theme={theme} aoEnviar={coletarDados} dados={dados}/>,
    <DadosParentes theme={theme} voltarEtapa={voltarEtapa} aoEnviar={coletarDados} dados={dados}/>,
    <DadosVacinas theme={theme} voltarEtapa={voltarEtapa} aoEnviar={coletarDados} dados={dados}/>,
    
  ];
  return (
    <>
    <ThemeProvider theme={theme}>
    <Stepper activeStep={etapaAtual} alternativeLabel>
    {
      LabelSteps.map((labels) =>(
        <Step key={labels}>
          <StepLabel>{labels}</StepLabel>
        </Step>
      ))
    }
    </Stepper>
    </ThemeProvider>
    <CaixaBorda >
      {DadosFormulario[etapaAtual]}
    </CaixaBorda>
    </>
  );
}
export default FormularioCadatro;