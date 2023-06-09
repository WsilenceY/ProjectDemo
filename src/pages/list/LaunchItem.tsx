/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-09 23:45:19
 * @FilePath: /ProjectDemo/src/pages/list/LaunchItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
export default function LaunchItem({item}:any) {
  return (
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
                  <Button href={`detail/${item.title}`}>learn more</Button>
              }
            />
          </ImageListItem>
  )
}
