import { Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    // background: 'yellow',
    height:'3em',
    width:'10em',
    border: '3px solid',
    fontSize: '1.3em',
    borderColor:'#baaef7',
    display: 'block',
    borderRadius: '1.5em',
    marginRight:'auto',
    marginLeft:'auto',
    marginTop: '1em',
    marginBottom: '1em',
  },
});

const OutlinedButton = ({children, href}) => {
  
  const classes = useStyles();

  return (
    <Link href={href}>
      <Button className={classes.button}>
        {children}
      </Button>
    </Link>
  );
}

export default OutlinedButton;