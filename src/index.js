import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Progress from './Progress';
import reportWebVitals from './reportWebVitals';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';

const images = [
  {
    url: '/static/images/button/Room1.jpeg',
    title: 'Room1',
    width: '40%',
  },
  {
    url: '/static/images/button/Room2.jpeg',
    title: 'Room2',
    width: '30%',
  },
  {
    url: '/static/images/button/Room3.jpeg',
    title: 'Room3',
    width: '30%',
  },
  {
    url: '/static/images/button/Room4.jpeg',
    title: 'Room4',
    width: '30%',
  },
  {
    url: '/static/images/button/Room5.jpeg',
    title: 'Room5',
    width: '30%',
  },
  {
    url: '/static/images/button/Room6.jpeg',
    title: 'Room6',
    width: '30%',
  },
  {
    url: '/static/images/button/Room7.jpeg',
    title: 'Room7',
    width: '30%',
  },
  {
    url: '/static/images/button/Room8.jpeg',
    title: 'Room8',
    width: '30%',
  },
  {
    url: '/static/images/button/Room9.jpeg',
    title: 'Room9',
    width: '30%',
  },
  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 20,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '30px',
  marginBlock: '10px'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  borderRadius: '30px',
  marginBlock: '10px',
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Cardrow(){
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' , padding:"10px"}}>
      {images.map((image) => (
        
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: 300,
            margin:10
          }}
        >
          
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <Image>
          
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>

        </ImageButton>
      ))}
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
      <Grid container >
        <Grid container item >
          <Cardrow />
        </Grid>
      </Grid>
    
  </div>

  
);

// If you want to start measuring performance in your Progress, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
