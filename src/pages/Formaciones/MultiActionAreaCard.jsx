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
     img: "./public/andrea-img/323207554_1484021318794470_2565617098109449865_n.jpg",
     data: " Clases de Hatha Yoga y Meditacion",
     key: "00",
    },
    {
     title: "Formación Yoga danza 2023",
     img: "./public/andrea-img/325460354_466234435717705_520290786717962369_n.jpg",
     data: "Yoga Danza",
     key: "01",
    },
    {
     title: "Auto Cultivo",
     img: "./public/andrea-img/327032262_853240319285141_902786940707842928_n.jpg",
     data: "Auto cultivo medicinal",
     key: "02",
    },
   ];
  