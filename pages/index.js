import Head from 'next/head'
import Image from 'next/image'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '500px',
    width: '100%',
    paddingTop: '5em',
    alignItems: 'center',
    backgroundColor: '#93e69f',
  },
  h1: {
    textAlign:'center',
  }
});

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <h1>Welcom to PolarEdge</h1>
    </div>
  )
}
