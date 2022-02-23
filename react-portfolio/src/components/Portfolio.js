import React from 'react';
import passwordGenerator from "../assets/passwordGenerator.jpg"
import refactoringExercise from "../assets/refactoringExercise.jpg"
import tixShare from "../assets/TixShare.png"


function Portfolio() {
  return <div className='body'><h1>Portfolio</h1>
  <div className='imageContainer'>
    <div>Password Generator<br/>
      <a target="_blank" href={"https://github.com/toriskyt/random-password-generator"}>GitHub link</a><br/>
      <a target="_blank" href={"https://toriskyt.github.io/random-password-generator/"}>Deployed link</a><br/>
      </div>
    <img alt="passwordGenerator img" src={passwordGenerator}/> 
  </div>

  <div className='imageContainer'>
    <div>Refactoring Exercise <br/>
      <a target="_blank" href="https://github.com/toriskyt/refactoring-html-project">GitHub link</a><br/>
      <a target="_blank" href={"https://toriskyt.github.io/refactoring-html-project/"}>Deployed link</a><br/>
      </div>
    <img alt="refactoring img" src={refactoringExercise}/> 
  </div>

  <div className='imageContainer'>
    <div>TixShare<br/>
    <a target="_blank" href="https://github.com/toriskyt/project-one">GitHub link</a><br/>
    <a target="_blank" href={"https://toriskyt.github.io/project-one/"}>Deployed link</a><br/>
    </div>
    <img alt="TixShare img" src={tixShare}/> 
  </div>
  </div>;
}

export default Portfolio;
