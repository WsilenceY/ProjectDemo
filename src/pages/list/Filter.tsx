import React,{useState} from 'react';
import {FormControl,Select,InputLabel,MenuItem,Grid,Button,TextField} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {queryType} from './types.ts'
 const Filter = (props:any) => {
  const [filterData,setFilterData]= useState<queryType>({
    status:'1',
    sort:'1'
   });
  const handleChange = (v:string,key: string)=>{
    setFilterData({...filterData,[key]:v})
  }
  return (
    <Grid container spacing={2} mb={2} mt={2}>
      <Grid container spacing={2} ml={0}>
        <Grid item xs={6} md={8} marginLeft={0}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <TextField onChange={(e)=>handleChange(e.target.value,'searchText')} id="outlined-basic" label="搜索" variant="outlined"/>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth>
            <Button
              variant="outlined"
              size="large"
              onClick={()=>{
                props.onSearch(filterData)
              }}>查询</Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">状态</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={filterData.status}
            onChange={(e)=>handleChange(e.target.value,'status')}
          >
            <MenuItem value={'1'}>全部</MenuItem>
            <MenuItem value={'2'}>是</MenuItem>
            <MenuItem value={'3'}>否</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="开始时间"
            onChange={(v)=>handleChange(v.toString(),'startTime')}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="结束时间"
            onChange={(v)=>handleChange(v.toString(),'endTime')}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">排序</InputLabel>
          <Select
            value={filterData.sort}
            onChange={(e)=>handleChange(e.target.value,'sort')}>
            <MenuItem value={'1'}>d</MenuItem>
            <MenuItem value={'2'}>s</MenuItem>
          </Select>
        </FormControl>
      </Grid>
  </Grid>
  );
}
export default Filter;
