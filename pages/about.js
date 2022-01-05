import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TeamMemberCard from "../components/TeamMemberCard";
import SupervisorCard from "../components/Supervisor";

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
      {/* Team Members */}
      <div className={classes.section}>
        <Typography variant="h2" className={classes.heading}>Team Members</Typography>
          {members.map((item, index) => {
            return ( 
              <TeamMemberCard key={index} 
                imgSrc={item.imgPath}
                name={item.name} 
                title={item.title} 
                desc={item.desc}
              />
            );
          })}
      </div>

      {/* Supervisors */}
      <div className={classes.section}>
        <Typography variant="h2" className={classes.heading}>Supervisors</Typography>
          {supervisors.map((item, index) => {
            return ( 
              <SupervisorCard key={index} 
                institute={item.institute} 
                name={item.name} 
                title={item.title} 
                desc={item.desc}
              />
            );
          })}
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
    desc:`PhD in Edge computing, University of Oslo. Msc in ICT Innovation, TU Berlin, KTH. 5
      years experiences in IT. CTO&Co-founder of Citycharge AS, a powerbank sharing platform
      launched in Norway and Sweden. Earlier employee as Technical development, in Power2U,
      EIT InnoEnergy. 6 Patents in Internet of Things and several high quality paper published.`,
  },
  {
    name: "Harry Liu",
    title:"Technical Development Lead",
    imgPath:"harry-liu.png",
    desc:`PhD in IoT and edge/cloud computing, Linköping University. Msc in ICT Innovation, TU Berlin
      and UNITN. 5 years experiences in IoT. The winner of Swedish Embedded Award 2018 in IoT
      group. One of the invited speaker of Embedded Conference Scandinavia 2019. Several highquality
      papers published in IoT and cloud computing field. 2 patents in Internet of things.`,
  },
  {
    name: "Jay Zhu",
    title:"Security Lead",
    imgPath:"jay-zhu.png",
    desc:`PhD in system security, University of Oslo. Msc in SKLOIS , Beijing China, UCAS. 10 years
      experiences in system security and distributed system, more than 10 papers and two patents.
      Currently, He is working as a lead cryptography engineer in technology innovation center,
      UAE and manages a team working in different cryptosystems.`,
  },
  {
    name: "Mahsa Motevallian",
    title:"Business Development",
    imgPath:"masha.png",
    desc:`MSC in Environmental Studies, NMBU. Research assistant before in University of Oslo, focused
      on the design and development of new methodologies and methods for the transition to
      sustainable futures for digitalization (e.g., IoT, Industry 4.0, Smart Grid, Smart City, etc.),
      including ICT business models. Also working on applying different types of machine learning
      techniques for analysing environmental data.`,
  },
  {
    name: "Hong Sun",
    title:"Fullstack Developer",
    imgPath:"hong.png",
    desc:`BS in Industrial Engineering, B.S in Software Technology. MSC in Industrial Engineering. 2 years of 
    experience in fullstack software development.`,
  },
];

const supervisors = [
  {
    name: "Amir Taherkordi",
    institute: "Universityt of Oslo",
    title:'Associate Pofessor',
    desc: `Rich experiences in distributed computing and software engineering aspects
      of emerging technologies, such as the Internet of Things, clouds and
      fogs/edges, cyber-physical systems, and smart grids. etc.`,
  },
  {
    name: 'Frank Eliassen',
    institute:'University of Oslo',
    titel: 'Porfessor and Group Leader in Network and Distributed System',
    desc:`Rich experience in service-oriented IoT/edge/fog computing and CPS
      middleware and programming models in application areas, including smart
      cities and smart grids, adaptive software systems, autonomic systems, peerto-
      peer systems, and cooperative micro-grids.`,
  },
  {
    name: 'Xiaopeng Li',
    institute: 'Microsoft Norway',
    title: 'Cloud & AI Business Lead',
    desc: `Xiaopeng leads the go-to-market strategy and execution of Microsoft Azure.
      Prior to that, Xiaopeng worked as an AI Advisor at Crayon Inmeta where he
      operated at the intersection of management consulting and data science.
      Xiaopeng led strategy and product development at Telia Company's data
      insights business unit.`,
  },
  {
    name: 'Haakon Bryhni',
    institute: 'SimulaMet Centre for Digital Engineering',
    title: 'Investor, Research Professor, Chairman NTNU Discovery',
    desc: `Serial investor and entrepreneur; Haakon Bryhni holds a PhD in high speed
      communication and multiprocessor server systems from University of Oslo.
      Bryhni co-founded the Nunatak and bryhni.com venture companies in 2001,
      investing in early-stage technology ventures related to ICT including 3d-Radar
      (sold and later re-aquired), Faster Imaging (sold), Squarehead Technology,
      Media Network Services, TransPacket, Elliptic Laboratories, Fabriscale
      Technologies, Troll Housing, Famweek and Explain. Bryhni served as COO
      and CTO in Elliptic Labs from 2012-16 developing touchless technologies
      based on ultrasound from research to shipping products. Bryhni is currently
      an advisor and board member in his portfolio companies.`,
  }
];