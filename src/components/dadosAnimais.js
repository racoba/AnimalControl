
import React, { useEffect, useState } from 'react';
import { FormLabel, InputAdornment, RadioGroup, TextField, FormControlLabel, Radio, Button, Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { ThemeProvider, withStyles } from '@material-ui/core';
import styled from 'styled-components';

const LabelRadio = styled(FormLabel)`
    margin-top: 3%;
`
const CentralBotao = styled(Grid)`
    margin: 3% 0;
`
const BotaoTextoBranco = withStyles((theme) =>({
    root:{
        color: "#FFFFFF",
    },
}))(Button);
const DadosAnimais = ({theme, aoEnviar, dados}) =>{
    const [nome, setNome]  = useState(dados.nome);
    const [descricao, setDescricao] = useState(dados.descricao);
    const [peso, setPeso] = useState(dados.peso);
    const [dataDeNascimento, setDataDeNascimento] = useState(dados.dataDeNascimento);
    const [sexo, setSexo] = useState(dados.sexo);
    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            aoEnviar({nome, descricao, peso, dataDeNascimento, sexo});

        }}>
            <ThemeProvider theme={theme}>
                <TextField
                defaultValue={dados.nome}
                id="nomeAnimal"
                label="Nome do Animal"
                name="nome"
                type="text"
                required
                size="medium"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event) =>{
                    setNome(event.target.value);
                }}
                

                />
                <TextField
                defaultValue={dados.descricao}
                id="descricao"
                label="Descrição do Animal"
                name="descricao"
                size="medium"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
                onChange={(event) =>{
                    setDescricao(event.target.value);
                }}
                />
                <TextField 
                defaultValue={dados.peso}
                id="peso"
                name="peso"
                required
                type="number"
                label="Peso do Animal"
                margin="normal"
                onChange={(event) =>{
                    setPeso(event.target.valueAsNumber);
                    
                }}
                InputProps={{startAdornment: <InputAdornment position="start">Kg</InputAdornment>}}
                variant="outlined"
                />
            
                <TextField 
                    style={{marginTop: "3%", marginLeft: 50}}
                    defaultValue={dados.dataDeNascimento}
                    id="dataDeNascimento"
                    name="Data de Nascimento"
                    label="Data de Nascimento"
                    required
                    type="date"
                    onChange={(event) =>{
                        console.log(event.target.value);
                        let data = event.target.value;
                        const ano = data.substr(0, 4);
                        const mes = data.substr(5, 2);
                        const dia = data.substr(8, 2);
                        const Data = dia + "-" + mes + "-" + ano;
                        setDataDeNascimento(data);
                        
                    }}
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <LabelRadio component="legend">Sexo</LabelRadio>
                <RadioGroup  aria-label="Sexo" name="sexo" onChange={(event) =>{setSexo(event.target.value)}}>
                        <FormControlLabel value="macho" control={<Radio required color="primary"/>} label="Macho" />
                        <FormControlLabel value="fêmea"  control={<Radio required color="primary"/>} label="Fêmea" />
                </RadioGroup>
                <CentralBotao container justifyContent="center">
                    <BotaoTextoBranco color="primary" size="large" variant="contained" type="submit" >Próximo</BotaoTextoBranco>
                </CentralBotao>
                
            </ThemeProvider>
        </form>
    );
}
export default DadosAnimais;