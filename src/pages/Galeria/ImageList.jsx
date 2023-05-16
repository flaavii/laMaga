import * as React from 'react';
import  Box from '@mui/material/Box';
import ImageList  from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ mt: 5, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: './andrea-img/lamaga-espacio00.jpg',
    title: 'LaMaga',
  },
  
  {
    img: './andrea-img/lamaga-espacio01.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio02.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio03.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio04.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio05.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio06.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio07.jpg',
    title: 'LaMaga',
  },
  
  {
    img: './andrea-img/lamaga-espacio08.jpg',
    title: 'LaMaga',
  },

  {
    img: './andrea-img/lamaga-espacio10.jpg',
    title: 'LaMaga',
  },
  
  {
    img: './andrea-img/lamaga-espacio11.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio12.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio09.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio13.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio14.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio15.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio16.jpg',
    title: 'LaMaga',
  },
  {
    img: './andrea-img/lamaga-espacio17.jpg',
    title: 'LaMaga',
  },
];
