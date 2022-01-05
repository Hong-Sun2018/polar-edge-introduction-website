import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TeamMemberCard from "../components/TeamMemberCard";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    border:0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '1100px',
    width: '100%',
    alignItems: 'center',
    color: '#333333',
    // backgroundColor: '#757575',
  },
  section: {
    width: '95%',
    maxWidth: '800px',
    marginTop: '4em',
    marginBottom:'4em',
  },
  heading: {
    textAlign:'center',
    marginTop: '40px',
    marginBottom:'30px',
    marginBottom: '1em'
  },
  subheading:{
    marginBottom: '1em',
  },
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'2em',
    textAlign:'justify',
    marginBottom:'1em',
  },
  bold:{
    fontWeight: 'bold',
  },
  indent:{
    paddingLeft:'0.3em',
    display:'flex',
    flexDirection:'row',
    marginBottom: '1em',
  },
  dot:{
    marginRight: '1em',
    fontWeight: 'bold',
  },
  indentContent:{
    textAlign: 'justify',
  },

});

const About = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h2" className={classes.heading}>Team Members</Typography>
        <Grid container alignItems="center" justifyContent="center">
          {members.map((item, index) => {
            return (
              <Grid item key={index}>
                <TeamMemberCard key={index} 
                  imgSrc={item.imgPath} 
                  name={item.name} 
                  title={item.title} 
                  desc={item.desc}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );

}

export default About;

const members = [
  {
    name: "Dylan Lan",
    title:"Manage Director",
    imgPath:"dylan-lan.png",
    desc:"",
  },
  {
    name: "Harry Liu",
    title:"Technical Development Lead",
    imgPath:"harry-liu.png",
    desc:"",
  },
  {
    name: "Jay Zhu",
    title:"Security Lead",
    imgPath:"jay-zhu.png",
    desc:"",
  },
  {
    name: "Mahsa Motevallian",
    title:"Business Development",
    imgPath:"masha.png",
    desc:"",
  },
  {
    name: "Hong Sun",
    title:"Fullstack Developer",
    imgPath:"hong.png",
    desc:"",
  },
];