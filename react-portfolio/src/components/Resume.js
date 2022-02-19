import React from 'react';

function Resume() {
  return <div className="body"><h2>Resume</h2>
  <img id="profileImage" src="https://picsum.photos/200"/><br/><br/>
  <a id="resumeLink" target="_blank" href={"https://docs.google.com/document/d/1-YTTORpgZhwIvPn0Zyte_LfOEaOHqL-jB3uoSRs4_ms/edit"}><h1>Download My Resume</h1></a><br/><br/>

  <h1>Frontend Proficiencies</h1><br/>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>JQuery</li>
    <li>React</li>
    <li>Bootstrap</li>
  </ul>

  <h1>Backend Proficiencies</h1>

  <ul>
    <li>Node</li>
    <li>Express</li>
    <li>MySQL</li>
    <li>MongoDB, Mongoose</li>
    <li>REST</li>
    <li>GraphQL</li>
  </ul>
  
  </div>;
}








export default Resume;
