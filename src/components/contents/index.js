import { Introduction } from './introduction/index';
import { Step1 } from './step1/index';
import { Step2 } from './step2/index';
import { Step3 } from './step3/index';
import { Result } from './result/index';
import Question from '../question';
import React, { useState, useEffect } from 'react';

export const Contents = () => {
  let [step1Array, set80Items] = useState([]);

  useEffect( () => {
    if (step1Array.length == 8) {
      console.log(true)
    } else {
      console.log(false)
    }
  })

  let contents;
  let [stepNumber, setStep] = useState(1)
  switch (stepNumber) {
    case 2:
      console.log(step1Array)
      if (step1Array.length == 8) { setStep(stepNumber = 3) }
      contents = <Step1 onClickImportance1={ () => set80Items([...step1Array, 1])} onClickImportance2={ () => set80Items([...step1Array, 2])} onClickImportance3={ () => set80Items([...step1Array, 3])} count={ step1Array.length }/>
      console.log('step1', step1Array)
      break
    case 3:
      contents = <Step2 onClickNextStep={ () => { setStep(stepNumber = 4) } } onClickRestart={ () => { setStep(stepNumber = 1 ) } } count = { step1Array.length }/>
      break
    case 4:
      contents = <Step3 onClickNextStep={ () => { setStep(stepNumber = 5) } } onClickRestart={ () => { setStep(stepNumber = 1 ) } } />
      break
    case 5:
      contents = <Result onClickRestart={ () => { setStep(stepNumber = 1) } }/>
      break
    default:
      contents = <Introduction onClickNextStep={ () => { setStep(stepNumber = 2) } } question={ Question }/>
      break
  }

  return (
    <>
      { contents }
    </>
  );
}
