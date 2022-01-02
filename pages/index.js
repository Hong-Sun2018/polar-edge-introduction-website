import Head from 'next/head'
import Image from 'next/image'
import { makeStyles } from '@material-ui/styles';
import HomeBannerImage from '../public/assets/images/home-banner.png';

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
  pageSection:{
    margin: 0,
    paddingTop: 0,
    border:0,
    width: '100%',
    height: '50em',
    backgroundImage: 'url(/assets/images/home-banner.png)',
    backgroundSize: '102%',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
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
      <div className={classes.pageSection}>
        
      </div>
      <h1>Welcom to PolarEdge</h1>
    </div>
  )
}
