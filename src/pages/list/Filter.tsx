/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-09 23:24:44
 * @FilePath: /ProjectDemo/src/pages/list/Filter.tsx
 * @Description: filter模块
 */
import React,{useState} from 'react';
import {Box,FormControl,Select,InputLabel,MenuItem,Grid,Button,TextField} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 const Filter = (props:any) => {
  const [age,setAge]= useState();
  const handleChange = ()=>{}
  return (
    <Grid container spacing={2} mb={2} mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <TextField id="outlined-basic" label="搜索" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth>
            <Button>查询</Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">状态</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="开始时间"
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="结束时间"
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">排序</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
  </Grid>
  );
}
export default Filter;
