import { makeStyles } from '@material-ui/core/styles';
import NavBarHeader from './NavBarHeader';
import NavDropMenuHeader from './NavDropMenuHeader';

const useStyles = makeStyles({
	root: {
  	margin: 0,
		padding: 0,
		width: '100%',
    height: '3em',
    background: '#333333',
  },
	container: {
		margin: 0,
		padding: 0,
		width: '95%',
    height: '3em',
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		flexDirection:'row',
		alignItems: 'center',
	},
	logo: {
		width: '30%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color:'white'
		// background: 'green'
	},
	navi: {
		width: '70%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		// background: 'red',
	}
});

const HeaderBar = () => {
  const classes = useStyles();
  
	return (
		<div className={classes.root}>
    	<div className={classes.container}>
				<div className={classes.logo}>
					logo
				</div>
				<div className={classes.navi}>
					<NavBarHeader />
					<NavDropMenuHeader />
				</div>	
    	</div>
		</div>
  );
}

export default HeaderBar;