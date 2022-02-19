import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return <div className='body'><h1>Portfolio</h1>
  <div className='imageContainer'>
    <div>Password Generator<br/>
      <a target="_blank" href={"https://github.com/toriskyt/random-password-generator"}>GitHub link</a><br/>
      <a target="_blank" href={"https://toriskyt.github.io/random-password-generator/"}>Deployed link</a><br/>
      </div>
    <img alt="passwordGenerator img" src="./assets/passwordGenerator.jpg"/> 
  </div>

  <div className='imageContainer'>
    <div>Refactoring Exercise <br/>
      <a target="_blank" href="https://github.com/toriskyt/refactoring-html-project">GitHub link</a><br/>
      <a target="_blank" href={"https://toriskyt.github.io/refactoring-html-project/"}>Deployed link</a><br/>
      </div>
    <img alt="refactoring img" src="./assets/refactoringExercise.jpg"/> 
  </div>

  <div className='imageContainer'>
    <div>TixShare<br/>
    <a target="_blank" href="https://github.com/toriskyt/project-one">GitHub link</a><br/>
    <a target="_blank" href={"https://toriskyt.github.io/project-one/"}>Deployed link</a><br/>
    </div>
    <img alt="TixShare img" src="./assets/TixShare.png"/> 
  </div>
  </div>;
}

export default Portfolio;
