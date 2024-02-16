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
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

export default function MediaCard( {element} ) {

  return (
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent>
        {element.photo ? (
          <Image
            width={300}
            height={200}
            src={`data:image/png;base64,${element.photo}`} 
            alt='manasLogo'
          />
        ) : (
          <Image
            width={300}
            height={200}
            src={NoPhotographyIcon} 
            alt='manasLogo'
          />
        )}
      
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
          
        </Typography>
      </CardContent>
    </Card>
  );
}
