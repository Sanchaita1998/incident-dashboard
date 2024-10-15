import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

const CardContainer = ({ title, children }) => {
  return (
    <Card className='CardSix' sx={{
      marginBottom:'20px', 
      
    }}>
      <CardHeader title={title} />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardContainer;