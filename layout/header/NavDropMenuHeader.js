import { Hidden, IconButton, Menu, MenuItem, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { HeaderNavLinks } from '../../constant/constants';

const useStyles = makeStyles({
  icon:{
    color:'white',
  },
  link: {
    color:'black'
  }
});


const NavDropMenuHeader = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
 

  return (
    <Hidden mdUp>
      <IconButton 
        onClick={handleClick}
        aria-label='settings'
      >
        <MenuIcon className={classes.icon}/>
      </IconButton>
      <Menu 
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {HeaderNavLinks.map((item, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              <Link className={classes.link} key={index} href={item.link}>{item.title}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Hidden>
  );
}

export default NavDropMenuHeader;