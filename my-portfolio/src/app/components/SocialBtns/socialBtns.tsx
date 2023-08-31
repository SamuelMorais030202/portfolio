import { GitHubIcon } from "../Icons/github-icon";
import { InstaIcon } from "../Icons/insta-icon";
import { LinkedInIcon } from "../Icons/linkedin-icon";
import { EmailIcon } from "../Icons/email-icon";

import './social-btns.scss';

export const SocialBtns = () => {
  return (
    <div className='social'>
      <a href="https://www.instagram.com/samuel_morais_0302/">
        <InstaIcon/>
      </a>
      <a href="https://www.linkedin.com/in/samuel-morais-garcia-4a823b244/">
        <LinkedInIcon/>
      </a>
      <a href="https://github.com/SamuelMorais030202">
        <GitHubIcon/>
      </a>
      <a href="mailto:moraissamuel009@gmail.com">
        <EmailIcon />
      </a>
    </div>
  )
}