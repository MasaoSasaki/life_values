import { Introduction } from './introduction/index';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';
import { Result } from './result/index';
// import Question from './Question';
import React, { useState } from 'react'

export const Contents = () => {
  let contents;
  let [stepNumber, changeNumber] = useState(1)
  switch (stepNumber) {
    case 2:
      contents = <Step2 onClickNextStep={ () => this.stepUp } onClickPrevStep={ () => this.setState({ stepNumber: 1 }) } question={ Question } />
      break
    case 3:
      contents = <Step3 onClickNextStep={ () => this.stepUp } />
      break
    case 4:
      contents = <Step4 onClickNextStep={ () => this.stepUp } />
      break
    case 5:
      contents = <Result onClick={ () => { changeNumber(stepNumber = 1) } }/>
      break
    default:
      contents = <Introduction onClick={ () => { changeNumber(stepNumber = 5) } } />
      break
  }

  return (
    <>
      { contents }
    </>
  );
}
