import React from 'react';
import styles from './index.module.scss'
import {Box, Button} from '@mui/material';
 const DetailItem = (props:any) => {
  return (
    <div className={styles.detail_page_wap}>
      <h1>
        <Button variant="contained">返回</Button>
        详情页
      </h1>
    </div>
  );
}
export default DetailItem;
