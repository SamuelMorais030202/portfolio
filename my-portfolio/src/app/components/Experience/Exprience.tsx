import { SectionTitle } from '../SectionTitle/section-title';
import { Skill } from '../Skill/Skill';
import './experience.scss';

export const Experience = () => {
  return (
    <div className="experience">
      <SectionTitle text="Experience"/>
      <p>2 years developing innovative projects that impact peoples lives</p>
      <div className="experience-time">
        <Skill image='/react.png' measure={2} years="2 years" />
        <Skill image='/js.png' measure={2} years="2 years" />
        <Skill image='/next.svg' measure={1} years="1 years" />
        <Skill image='/ts.png' measure={1} years="1 years" />
        <Skill image='/nodejs_logo.png' measure={1} years="1 years" />
      </div>
    </div>
  );
}