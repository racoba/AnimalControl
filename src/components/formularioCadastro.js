import { Box, createTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DadosAnimais from './dadosAnimais';
import DadosParentes from './dadosParentes';

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
    setDados({...dados, ...Dados});
    proximaEtapa();
  }
  const DadosFormulario = [
    <DadosAnimais theme={theme} aoEnviar={coletarDados} dados={dados}
    />,
    <DadosParentes theme={theme} voltarEtapa={voltarEtapa} aoEnviar={coletarDados} dados={dados}/>
  ];
  return (
    <CaixaBorda >
      {DadosFormulario[etapaAtual]}
    </CaixaBorda>
  );
}
export default FormularioCadatro;