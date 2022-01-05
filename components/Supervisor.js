import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";

const SupervisorCard = ({name, institute, title, desc}) => {

  const useSytles = makeStyles({
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
      width: '250px',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1em',

    },
    name: {
      fontWeight: 'bold',
      marginTop: '1em',
    },
    institute: {
      marginTop: '1em',
      marginBottom: '1em',
      textAlign: 'center',
    },
    title: {
      marginBottom: '1em',
      textAlign: 'center',
    },
    desc: {
      textAlign: 'justify', 
    }, 
  });

  const classes = useSytles();

  return (
    <div className={classes.root}> 
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={5} sm={12} xs={12}>
          <div className={classes.imgNameTitleContainer}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.institute}> {institute}</Typography>
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

export default SupervisorCard;