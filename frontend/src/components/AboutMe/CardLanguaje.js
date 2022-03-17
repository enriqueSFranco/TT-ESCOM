import React from 'react';
//import { useFetch } from "../../hooks/useFetch";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
//import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';

export default function CardLanguaje() {
  const { data } = {"idiomas":"Ingles"}
  
  return (
    <Grid container>
      <Card>
    <CardHeader>
      title = {data["idiomas"]}
    </CardHeader>

  </Card></Grid>
    
  )
}
