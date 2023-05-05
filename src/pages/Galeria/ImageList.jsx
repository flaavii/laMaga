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
    img: './public/andrea-img/323207554_1484021318794470_2565617098109449865_n.jpg',
    title: 'LaMaga',
  },
  
  {
    img: './public/andrea-img/328873876_621828549705536_1888501422662779442_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/328964715_1619542378467656_3332402784117282672_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/332923266_921302455884818_4779785120218150170_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/334279252_563445739183172_6768892743075277190_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/335079347_788283625972462_2497298878667817442_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/336451013_237593082060475_3538328996758701575_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/336564974_1539327819879805_35584916524045742_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/336902729_604501918198931_6032723947713559800_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/337128654_233237129159548_6529621611473044010_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/338017945_580136260738096_5969922779723775590_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/339995098_733301145249181_6737961997097313756_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/340003503_904761140601718_6398863116863082218_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/340822971_891782891936786_1322641652337438936_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/323207554_1484021318794470_2565617098109449865_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/325460354_466234435717705_520290786717962369_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/326343515_3196355764010738_6153478716015903357_n.jpg',
    title: 'LaMaga',
  },
  {
    img: './public/andrea-img/327032262_853240319285141_902786940707842928_n.jpg',
    title: 'LaMaga',
  },
];
