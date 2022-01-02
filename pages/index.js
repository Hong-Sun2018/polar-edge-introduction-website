import Head from 'next/head'
import Image from 'next/image'
import { makeStyles } from '@material-ui/styles';
import HomeBannerImage from '../public/assets/images/home-banner.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    border:0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '500px',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: '#93e69f',
  },
  homeBanner:{
    margin: 0,
    padding:0,
    border:0,
    width: '100%',
    height: '30em',
    backgroundImage: 'url(/assets/images/home-banner.png)',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    color: 'white',
  },
  bannerText:{
    textAlign: 'center',
    marginLeft: '1em',
    marginRight: '1em',
    marginBottom: '0.5em',
  },
  bannerImage:{
    margin: 0,
    width: '100%',
  },
  h1: {
    textAlign:'center',
  }
});

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div className={classes.homeBanner}>
        <Typography className={classes.bannerText} variant='h3'>PolarEdge</Typography>
        <Typography className={classes.bannerText} variant="h6">An open IoT Edge Platform to  manage ubiquitous device connection and accelerate business operation</Typography>
      </div>
      <h1>Welcom to PolarEdge</h1>
    </div>
  )
}
