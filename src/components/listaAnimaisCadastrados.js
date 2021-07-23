import React from "react"
import { Grid } from '@material-ui/core'

import boi from "../assets/boi.svg"
import CardAnimal from "./cardAnimal"



const listaAnimais = [
  {
    img: boi,
    quantM: 10,
    quantF: 22,
    tipoAnimal: "Bovino"
  },
  {
    img: boi,
    quantM: 10,
    quantF: 22,
    tipoAnimal: "Bovino"
  },
 
]

export default () => {

  return (
    <Grid container direction="row">
      {listaAnimais.map((card) => (
        <CardAnimal quantM={card.quantM} quantF={card.quantF} img={card.img} tipoAnimal={card.tipoAnimal}/>
      ))}
    </Grid>
  )
}