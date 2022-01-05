import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import OutlinedButton from '../components/OutlinedButton';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    border:0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '1100px',
    width: '100%',
    alignItems: 'center',
    color: '#333333',
    // backgroundColor: '#757575',
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
  section: {
    width: '95%',
    marginTop: '4em',
    marginBottom:'4em',
  },
  heading: {
    textAlign:'center',
    marginTop: '40px',
    marginBottom:'30px',
  },
  content: {
    width: '10em',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'2em',
  },

});

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      {/* banner */}
      <div className={classes.homeBanner}>
        <Typography className={classes.bannerText} variant='h3'>PolarEdge</Typography>
        <Typography className={classes.bannerText} variant="h5">An open IoT Edge Platform to  manage ubiquitous device connection and accelerate business operation</Typography>
      </div>

      {/* product */}
      <div className={classes.section}>
        <Typography variant="h3" className={classes.heading}>Our Products</Typography>
        <div className={classes.content}>
          <Typography variant="h6">· PolarEdge PaaS</Typography>
          <Typography variant="h6">· EdgeAI</Typography>
          <Typography variant="h6">· EdgeBox</Typography>
          <Typography variant="h6">· Consultancy</Typography>
        </div>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item md={3} sm={12} xs={12}>
            <OutlinedButton href="/product">Know More</OutlinedButton>
          </Grid>
          <Grid item md={3} sm={12}xs={12}>
            <OutlinedButton>Contact Us</OutlinedButton>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
