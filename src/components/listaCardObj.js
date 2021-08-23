import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardObj from './cardObj';
import { ContainerForm } from './styled';

const dadosCard = [
  {
    titulo: "Objetivo",
    descricao: "O AnimalControl tem o objetivo de facilitar a administração "+
    "da sua fazenda agropecuaria"
  },
  {
    titulo: "Funcionalidade",
    descricao: "Além de administrar," +
      " mostraremos os dados e resumos mais simplificados para o entendimento " +
      "do que esta acontecendo na sua fazenda, podendo gravar animais, ver "+
      "fichas deles e ver tambem a sua produtividade"
  },
  {
    titulo: "Criadores",
    descricao: "O grupo Comp do Senai foi responsavel por criar esse site"
  },
];
const ListaCardObj = () => {
  return (
    <ContainerForm maxWidth="lg" style={{ minWidth: "100%", paddingBottom: "5%" }}>
      <Typography variant="h5" align="center">
        Vamo ver um pouco sobre o que é o AnimalControl
      </Typography>
      <div style={{
      display: "flex", 
      flexDirection:"row", 
      justifyContent:"space-between", 
      flexWrap:"wrap",
      alignItems:"center",
      marginTop:"3%"}}
      >
      {
        dadosCard.map((card) =>(
          
          <CardObj titulo={card.titulo} descricao={card.descricao}/>
          
        ))
      }
      </div>
    </ContainerForm>
  );
}

export default ListaCardObj;