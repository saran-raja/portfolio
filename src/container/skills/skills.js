import "./skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-head">Skills</h1>

      <div className="skills-card">
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <h>HTML5</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <h>CSS3</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <h>JavaScript</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
          <h>React js</h>
        </image>

        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg"
            alt="Ant Design"
          />
          <h>Ant Design</h>
        </image>
        <image>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />

           <h>Node js</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
          />
          <h>Java</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <h>MySQL</h>
        </image>
        <image>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
          />
          <h>Git</h>
        </image>
      </div>
    </div>
  );
}

export default Skills;
