
import MultiActionAreaCard from "./MultiActionAreaCard";
import { Grid } from "@mui/material";

export default function Formaciones() {
    return (
      <div>
        <h1 align='center'>Formaciones</h1>

        <Grid container direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

    <Grid item xs={8} md={8}>

      
        <MultiActionAreaCard/>


        </Grid>
            </Grid>

      </div>
    );
  }