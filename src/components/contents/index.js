import { Introduction } from './introduction/index';
import { Step1 } from './step1/index';
import { Step2 } from './step2/index';
import { Step3 } from './step3/index';
import { Result } from './result/index';
import Question from '../question';
import React, { useState } from 'react'

export const Contents = () => {
  let contents;
  let [stepNumber, changeNumber] = useState(1)
  switch (stepNumber) {
    case 2:
      contents = <Step1 onClickNextStep={ () => { changeNumber(stepNumber = 3) } } onClickRestart={ () => { changeNumber(stepNumber = 1 ) } } question = { Question } />
      break
    case 3:
      contents = <Step2 onClickNextStep={ () => { changeNumber(stepNumber = 4) } } onClickRestart={ () => { changeNumber(stepNumber = 1 ) } } />
      break
    case 4:
      contents = <Step3 onClickNextStep={ () => { changeNumber(stepNumber = 5) } } onClickRestart={ () => { changeNumber(stepNumber = 1 ) } } />
      break
    case 5:
      contents = <Result onClickRestart={ () => { changeNumber(stepNumber = 1) } }/>
      break
    default:
      contents = <Introduction onClickNextStep={ () => { changeNumber(stepNumber = 2) } } question={ Question }/>
      break
  }

  return (
    <>
      { contents }
    </>
  );
}
