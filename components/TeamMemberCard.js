import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { Typography, Grid } from "@material-ui/core";

const TeamMemberCard = ({imgSrc, name, title, desc}) => {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: '800px',
      marginLeft: 'auto', 
      marginRight: 'auto',
      marginTop: '1em',
      marginBottom: '1em',
    },
    heading: {
  
    },
    imgNameTitleContainer: {
      display: 'flex',
      width: '300px',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1em',

    },
    img: {
      width: '100px',
      height: '130px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(/assets/images/team/${imgSrc})`,
      backgroundRepeat: 'no-repeat',
    },
    name: {
      fontWeight: 'bold',
      marginTop: '1em',
    },
    title: {
      marginBottom: '1em',
    },
    desc: {
      textAlign: 'justify', 
    },
  });
  

  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={5} sm={12} xs={12}>
          <div className={classes.imgNameTitleContainer}>
            <div className={classes.img}></div>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.title}>{title}</Typography>
          </div>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <Typography className={classes.desc}>{desc}</Typography>
        </Grid>
      </Grid>
      <hr />
      
    </div>
  );
}

export default TeamMemberCard;