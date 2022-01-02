import { Hidden, Link } from "@material-ui/core";
import { HeaderNavLinks } from "../../constant/constants";
import { makeStyles } from "@material-ui/core"; 

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
	},
	link: {
		marginLeft: '1em',
		marginRight: '1em',
	}
});

const NavBarHeader = () => {
	const classes = useStyles();

  return (
	  <Hidden smDown>
		<div className={classes.root}>
			{ HeaderNavLinks.map((item, index) => {
				return <Link className={classes.link} key={index} href={item.link}>{item.title}</Link>
			})}
		</div>
	</Hidden>
	);
};

export default NavBarHeader;