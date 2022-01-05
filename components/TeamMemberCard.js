import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { Typography } from "@material-ui/core";

const TeamMemberCard = ({imgSrc, name, title, desc}) => {

  return (
    <div>
      <Image src={`/assets/images/team/${imgSrc}`} width={100} height={100}/>
      <Typography>{name}</Typography>
      <Typography>{title}</Typography>
      <Typography>{desc}</Typography>
    </div>
  );
}

export default TeamMemberCard;