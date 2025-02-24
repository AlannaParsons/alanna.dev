import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faBluesky, faGithub,} from "@fortawesome/free-brands-svg-icons"
import { Button } from '@mantine/core';
import classes from './Contacts.module.css';

export default function Contacts() {
  return(
    <div className="flex">
      <span className="flex-grow self-center bg-white h-[2px]"></span>
      <Button className={classes.contactButtons}> 
        <a href="mailto:alannagparsons@gmail.com" target="_blank" title="mailto:alannagparsons@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} className={classes.contactIcons}/></a>
      </Button>

      <Button className={classes.contactButtons}> 
        <FontAwesomeIcon icon={faGithub} className={classes.contactIcons}/>
      </Button>

      <Button className={classes.contactButtons}> 
        <FontAwesomeIcon icon={faLinkedin} className={classes.contactIcons}/>
      </Button>

      <Button className={classes.contactButtons}> 
        <FontAwesomeIcon icon={faBluesky} className={classes.contactIcons}/>
      </Button>
      <span className="flex-grow self-center bg-white h-[1px]"></span>
    </div>
)}