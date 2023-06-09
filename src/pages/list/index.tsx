/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-09 11:18:53
 * @FilePath: /ProjectDemo/src/pages/list/index.tsx
 * @Description: 列表页
 */
import React,{useState} from 'react';
import {Container,CssBaseline,Box,Grid,Paper,styled, Link,Button  } from '@mui/material';
import Filter from './Filter'
import LaunchItem from './LaunchItem'
import { Outlet } from "react-router-dom";
import styles from './index.module.scss'
 const ListCon= () => {
  const [itemnum, setItemNm]=useState(12)
  return (
    <React.Fragment>
      <CssBaseline />
      <Filter></Filter>
      <div className={styles.list_con}>
        <Grid container spacing={2} height={'100%'} overflow={'scroll'}>
          {
            new Array(itemnum).fill(1).map((item,index)=>{
              return (
                <Grid xs={12} xl={6} item minHeight={200}>
                   <LaunchItem></LaunchItem>
                </Grid>
              )
            })
          }
          <Grid xs={12} xl={12} item>
            <Link component={Button}>回到顶部</Link>
          </Grid>
        </Grid>
      </div>

      <Outlet />
    </React.Fragment>
  );
}
export default ListCon;
