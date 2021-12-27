import { Link } from "@material-ui/core";
import { FooterNavLinks } from "../../constant/constants";
import { makeStyles } from "@material-ui/core"; 

const useStyles = makeStyles({
	root: {
    width: '7em',
		display: 'flex',
		flexDirection: 'column',
    background: 'pink',
	},
	link: {
		marginLeft: '1em',
		marginRight: '1em',
	}
});

const NavBarFooter = () => {
	const classes = useStyles();

  return (
		<div className={classes.root}>
      <div>Site Map: </div>
			{ FooterNavLinks.map((item, index) => {
				return (
          <Link className={classes.link} key={index} href={item.link}>{item.title}</Link>
        );
			})}
		</div>
	);
};

export default NavBarFooter;