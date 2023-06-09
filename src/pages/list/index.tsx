import React,{useRef,useEffect} from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import styles from './index.module.scss'
import Filter from './Filter'
import LaunchItem from './LaunchItem';
import { Outlet } from 'react-router-dom'
export default function TitlebarImageList() {
  const listref:any = useRef(null)
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const [items, setItems] = React.useState(itemData);
  const toTop = () => {
    if(!listref.current){return}
    console.log('ssss',listref.current)
    listref.current.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  function handleScroll(){
    console.log('添加数据');
    setItems([...items,...itemData])
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }
  useEffect(()=>{
    //判断滚动到底部
    if(!listref.current){return}
    listref.current.addEventListener('scroll',function(e:any){
      if(e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight-5){
        console.log('滚动到底部了');
        setLoading(true)
        handleScroll()
      }
    })
    return ()=>{
      listref.current.removeEventListener('scroll',handleScroll)
    }
  },[items])
  return (
    <>
    <Outlet/>
    <div className={styles.list_page_wrap}>
      <Filter/>
      <div id='ttt' className={styles.list_con} ref={listref}>
        <Grid container spacing={2}  width={1000}>
          {items.map((item,index) => (
            <Grid item xs={12} md={6} key={`img${index}`}>
              <LaunchItem item={item}/>
            </Grid>
          ))}
        </Grid>
        <div className={styles.top_btn_con} onClick={toTop}>
            <Link component={Button}>
                  <Icon>local_airport</Icon>
            </Link>
        </div>
        {
          loading &&
          <div className={styles.loadingbtn}>
            <LoadingButton  loading variant="outlined"></LoadingButton>
          </div>
        }
      </div>
    </div>
    </>
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
