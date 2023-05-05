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
     img: "./public/andrea-img/323207554_1484021318794470_2565617098109449865_n.jpg",
     data: " Clases de Hatha Yoga y Meditacion",
     key: "06",
    },
    {
     title: "Entrenamiento #animalflow",
     img: "./public/andrea-img/327032262_853240319285141_902786940707842928_n.jpg",
     data: "Animal Flow",
     key: "08",
    },
    {
     title: "Masajes",
     img: "./public/andrea-img/326343515_3196355764010738_6153478716015903357_n.jpg",
     data: "Masajes terapeuticos",
     key: "09",
    },
    {
     title: "Medicina natural",
     img: "./public/andrea-img/336902729_604501918198931_6032723947713559800_n.jpg",
     data: "Fitoterapia",
     key: "10",
    },
    {
     title: "Retiros",
     img: "./public/andrea-img/340018914_1849745065410998_6313290106657943656_n.jpg",
     data: "Retiros en Argentina",
     key: "11",
    },
   ];
  