import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function EstudioCard() {
    return (
      
        
      <Card  >
          {itemData.map((item) => (
        <CardActionArea key={item}>
          <CardMedia
            component="img"
            height="200"
            image= {item.img}
            alt= {item.title}
            
          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {item.data}
            </Typography>


          </CardContent>

        </CardActionArea> ))}


     
            </Card>

         
    ) ;
  } 

const itemData = [
    {
     title: "Hatha Yoga y Meditación",
     img: "./andrea-img/lamaga-espacio09.jpg",
     data: " Clases de Hatha Yoga y Meditacion",
     key: "06",
    },
    {
     title: "Entrenamiento #animalflow",
     img: "./andrea-img/lamaga-espacio15.jpg",
     data: "Animal Flow",
     key: "08",
    },
    {
     title: "Masajes",
     img: "./andrea-img/lamaga-espacio17.jpg",
     data: "Masajes terapeuticos",
     key: "09",
    },
    {
     title: "Medicina natural",
     img: "./andrea-img/lamaga-espacio06.jpg",
     data: "Fitoterapia",
     key: "10",
    },
    {
     title: "Retiros",
     img: "./andrea-img/lamaga-espacio08.jpg",
     data: "Retiros en Argentina",
     key: "11",
    },
   ];
  