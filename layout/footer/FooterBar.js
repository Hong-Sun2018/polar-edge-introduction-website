import { makeStyles } from '@material-ui/core/styles';
import NavBarFooter from './NavBarFooter';

const useStyles = makeStyles({
	root: {
  	margin: 0,
		padding: 0,
		width: '100%',
    background: '#333333',
  },
  continer: {
		width: '90%',
    height: '9em',
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		flexDirection:'row',
		alignItems: 'center',
    color:'white',
  },
	logo: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		// background: 'green'
	},
  social: {
    width: '50%',
    paddingLeft: '5em',
    paddingRight:'5em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // background: 'red',
  },
	navi: {
		width: '25%',
    paddingLeft: '5em',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		// background: 'green',
	}
});

const FooterBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.continer}>
        <div className={classes.logo}>
          <div>Footer Logo</div>
          <div>Copy Right</div>
        </div>
        {/*
        <div className={classes.social}>
          <div>social 1</div>
          <div>social 2</div>
          <div>social 3</div>
          <div>social 4</div>
        
        </div>
        */}
        <div className={classes.navi}>
          <NavBarFooter />
        </div>
      </div>
    </div>
  )
}

export default FooterBar;