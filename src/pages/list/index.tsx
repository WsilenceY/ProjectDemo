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
import {queryType} from './types.ts'
import {itemData} from './mock.ts'
export default function TitlebarImageList() {
  const listref:any = useRef(null)
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState(itemData);
  const handleFilter = (v:queryType)=>{
    console.log('查询条件',v);
  }
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
    {/* 子路由 */}
    <Outlet/>
    <div className={styles.list_page_wrap}>
      {/* 查询模块 */}
      <Filter onSearch={handleFilter}/>
      {/* 列表容器 */}
      <div className={styles.list_con} ref={listref}>
        <Grid container spacing={2}  width={1000}>
          {items.map((item,index) => (
            <Grid item xs={12} md={6} key={`img${index}`}>
              {/* 内容item */}
              <LaunchItem item={item}/>
            </Grid>
          ))}
        </Grid>
        {/* 返回顶部按钮 */}
        <div className={styles.top_btn_con} onClick={toTop}>
            <Link component={Button}>
                  <Icon>local_airport</Icon>
            </Link>
        </div>
        {/* loading */}
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
