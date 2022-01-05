import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

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

export default function Product() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h2" className={classes.heading}>Products</Typography>
        <Typography variant="h6" className={classes.subheading}>PolarEdge PaaS</Typography>
        <Typography variant="body1" className={classes.content}>The PolarEdge project aims to develop an open IoT Edge platform that provides platform-as-a-service (PaaS), 
          which can be deployed to various IoT edge scenarios (e.g., factory floor, building, logistics, and field assets), enable connection to 
          massive IoT protocols (sensors and actuators), and run on custom hardware such as IoT gateways and embedded PCs, regardless of the 
          heterogeneous architectures (e.g., x86, ARM or TPU). The open edge platform provides the runtime for custom edge applications that are 
          developed using cloud-native philosophy, i.e., applications are modulated into microservices to guarantee light footprint, maintainability, 
          and scalability. Through a single panel exposed by the edge platform, customers are able to deploy custom applications into distributed 
          edge devices in a scalable manner and perform monitoring, control, and artificial intelligence tasks through the same panel. The key 
          values of the platform to the industry are highlighted as follows:
        </Typography>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Openness: </span>As a PaaS layer, the edge platform is hardware and cloud independent, which helps industry customers avoid vendor lock-in problems.</Typography>
        </div>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Offline Support: </span>Applications developed on the edge platform features cloud-native design, which is a future-proof design pattern based on microservice to enable large-scale deployment.</Typography>
        </div>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Cloud-Native Design: </span>The edge platform enables the offline self-maintenance capability to guarantee the quality of service during the loss of the Internet.</Typography>
        </div>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Minimized Time-to-Market: </span>The edge platform has native support for heterogeneous edge hardware and IoT protocols, enabling fast prototyping and solution development to minimize time-to-market.</Typography>
        </div>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Reduced Operation Complexity: </span>Device monitoring and management, and application deployment are through a single panel of glass so as to guarantee easy operation.</Typography>
        </div>
        <div className={classes.indent}>
          <Typography className={classes.dot}>·</Typography>
          <Typography className={classes.indentContent}><span className={classes.bold}>Enhanced Security: </span>Zero-trust security is integrated into the edge platform to guarantee enhanced security.</Typography>
        </div>
      </div>
    </div>
  );

}