import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import styles from './index.module.scss'
import Filter from './Filter'
export default function TitlebarImageList() {
  return (
    <div className={styles.list_page_wrap}>
    <Filter/>
    <Grid container spacing={2} height={'100%'} width={1000} overflow={'scroll'}>
      {itemData.map((item) => (
        <Grid item xs={12} md={6}>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </Grid>
      ))}
    </Grid>
    <div className={styles.top_btn_con}>
           <Link component={Button}>
                 <Icon>local_airport</Icon>
           </Link>
        </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

// /*
//  * @Author: wangying wangying@waytous.com
//  * @Date: 2023-06-09 09:54:59
//  * @LastEditors: wangying wangying@waytous.com
//  * @LastEditTime: 2023-06-09 18:15:06
//  * @FilePath: /ProjectDemo/src/pages/list/index.tsx
//  * @Description: 列表页
//  */
// import React,{useState} from 'react';
// import {CssBaseline,Grid, Link,Button, Icon  } from '@mui/material';
// import Filter from './Filter'
// import LaunchItem from './LaunchItem'
// import { Outlet } from "react-router-dom";
// import styles from './index.module.scss'
//  const ListCon= (props:any) => {
//   // const {classes} = props;
//   const [itemnum, setItemNm]=useState(12)
//   return (
//     <div className={styles.list_page_wrap}>
//       <CssBaseline />
//       <Filter></Filter>
//       <div className={styles.list_con}>
//         <Grid container spacing={2} height={'100%'} width={1000} overflow={'scroll'}>
//           {
//             new Array(itemnum).fill(1).map((item,index)=>{
//               return (
//                 <Grid xs={12} xl={6} item minHeight={200} maxHeight={200}>
//                    <LaunchItem></LaunchItem>
//                 </Grid>
//               )
//             })
//           }
//         </Grid>
//         <div className={styles.top_btn_con}>
//           <Link component={Button}>
//                 <Icon>local_airport</Icon>
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }
// export default ListCon;
