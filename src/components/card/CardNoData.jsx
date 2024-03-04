import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import noData from "../../../public/noData.jpg"
import Image from 'next/image';

function CardNoData() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
    <CardActionArea>
      <CardContent sx={{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                    }}>
        <Image
        component="img"
        height="140"
        src={noData}
        alt="green iguana"
        />
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop: 3}}>
          Берилиштер табылган жок!
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardNoData