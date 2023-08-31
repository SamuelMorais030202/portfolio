import './information.scss';

export const Info = () => {
  return (
    <div className="infos">
      <h3>Languages</h3>
      <div className="languages-info">
        <span>🇺🇸 EN - Basic</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <h3>Education</h3>
      <div className="educational-info">
        <span>🎓</span>
        <span>Full Stack Web Development - Trybe</span>
      </div>
    </div>
  );
}