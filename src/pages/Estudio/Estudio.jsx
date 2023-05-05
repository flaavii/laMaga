import * as React from 'react';

import EstudioCard from './EstudioCard';
import { Grid } from '@mui/material';




export default function Estudio() {
  return (
    <div>
      <h1>Estudio de Yoga</h1> 
<div>
<Grid container
    >
        <Grid item>
<EstudioCard/>
</Grid>
</Grid>

      </div>
    </div>
  );
  } ;

 
