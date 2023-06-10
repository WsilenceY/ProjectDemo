import React from 'react';
import styles from './index.module.scss'
import { Button } from '@mui/material';
 const DetailItem = () => {
  return (
    <div className={styles.detail_page_wap}>
      <h1>
        <Button variant="contained" href='javascript:history.go(-1)'>Back to LAUNCHES</Button>
      </h1>
      <div className={styles.detail_con}>
        <div className={styles.video_con}>
          <video
            width={'100%'}
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
        </div>
        <div className={styles.info_con}>
          <p>APPIL 1,9,2023 </p>
          <h2>title</h2>
          <p>content content content contentcontentcontentcontentcontentcontentcontent</p>
        </div>
      </div>
    </div>
  );
}
export default DetailItem;
