"use client"
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import Image from 'next/image'

export default function MediaCard( {element} ) {

  return (
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent>
      <Image
        width={100}
        height={100}
        src={`data:image/png;base64,${element.photo}`} 
        alt='manasLogo'
      />
        <Typography gutterBottom variant="h6" component="div">
          {element.lastName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {element.firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.email}
          
        </Typography>
      </CardContent>
    </Card>
  );
}
