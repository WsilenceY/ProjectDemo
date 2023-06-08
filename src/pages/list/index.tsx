import React from 'react';
import {Container,CssBaseline,Box,Grid,Paper,styled  } from '@mui/material';
import Filter from './Filter'
import LaunchItem from './LaunchItem'
import { Outlet } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 const ListCon= (props:any) => {
  console.log('----list-- props--', props)
  return (
    <React.Fragment>
      <CssBaseline />
      <Filter></Filter>
      <Container component={Grid} maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Item>
            <LaunchItem></LaunchItem>
          </Item>
          <Item>
            <LaunchItem></LaunchItem>
          </Item>
          <Item>
            <LaunchItem></LaunchItem>
          </Item>
          <Item>
            <LaunchItem></LaunchItem> 
          </Item>
        </Box>
      </Container>
      <Outlet />
    </React.Fragment>
  );
}
export default ListCon;