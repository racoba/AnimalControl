import React from "react"
import { Grid, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import boi from "../assets/boi.jpg"




  const imagensData = [
      {
        img: boi,
        title: 'Boi',
      }
  ]

export default () => {
 
    return (
        <Grid style={{heigth:"20px"}}>
            <img src={boi} alt="miniboi" />
        </Grid>
    )
}