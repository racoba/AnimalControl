import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
max-height: 25%;
max-width: 25%;
border: 1px solid;    
border-radius: 8px;
padding: 2.25%;
`
const CardObj = ({titulo, descricao}) =>{
    return(
        <Card>
            <Typography variant="h6" align="center" >
                {titulo}
            </Typography>
            <Typography variant="subtitle1" align="center"
            style={{marginTop:"2.5%"}}>
                {descricao}
            </Typography>
        </Card>
    );
}

export default CardObj;
