import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





export default function MultiActionAreaCard() {
    return (
 

      <Card>
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
     img: "./andrea-img/lamaga-espacio01.jpg",
     data: " Clases de Hatha Yoga y Meditacion",
     key: "10",
    },
    {
     title: "Formación Yoga danza 2023",
     img: "./andrea-img/lamaga-espacio20.jpg",
     data: "Yoga Danza",
     key: "11",
    },
    {
     title: "Auto Cultivo",
     img: "andrea-img/lamaga-espacio14.jpg",
     data: "Auto cultivo medicinal",
     key: "12",
    },
   ];
  