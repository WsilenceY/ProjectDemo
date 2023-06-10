import React from 'react';
import styles from './index.module.scss'
import {Box, Button} from '@mui/material';
 const DetailItem = () => {
  return (
    <div className={styles.detail_page_wap}>
      <h1>
        <Button variant="contained" href='javascript:history.go(-1)'>Back to LAUNCHES</Button>
      </h1>
      <Box sx={{ width: '100%' }} height={800} width={1000} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} width={1000} overflow={'hidden'} marginLeft={'calc(50% - 500px)'}>
          <video
            width={1000}
            loop
            muted
            controls
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} color={'red'}>
          <p>APPIL 1,9,2023 </p>
          <h2>title</h2>
          <p>content content content contentcontentcontentcontentcontentcontentcontent</p>
        </Box>
      </Box>
    </div>
  );
}
export default DetailItem;
