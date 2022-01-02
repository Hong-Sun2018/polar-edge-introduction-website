import { Link } from "@material-ui/core";
import { FooterNavLinks } from "../../constant/constants";
import { makeStyles } from "@material-ui/core"; 

const useStyles = makeStyles({
	root: {
    width: '6em',
		display: 'flex',
		flexDirection: 'column',
    background: 'pink',
	},
	title:{
		paddingBottom:'5px',
	},
	link: {
		marginLeft: '1em',
		marginRight: '1em',
		color: 'white',
	}
});

const NavBarFooter = () => {
	const classes = useStyles();

  return (
		<div className={classes.root}>
      <div className={classes.title}>Site Map: </div>
			{ FooterNavLinks.map((item, index) => {
				return (
          <Link className={classes.link} key={index} href={item.link}>{item.title}</Link>
        );
			})}
		</div>
	);
};

export default NavBarFooter;