import React, { useState } from 'react';
import { SelectBox } from '../../selectbox/index';

export const Step1 = (props) => {
  let [hightImportanceCount, countUpHightImportance] = useState(0);
  let [middleImportanceCount, countUpMiddleImportance] = useState(0);
  let [lowImportanceCount, countUpLowImportance] = useState(0);
  let count = hightImportanceCount + middleImportanceCount + lowImportanceCount;

  return (
    <div className="Step1">
      <div className="contents">
        <div className="question">
          <p>直感で選んでください。（{ count + 1 }/{ props.question.length }）</p>
          <small>※ページを更新すると最初からになります。</small>
          <div><h4>{ props.question[count].title }</h4></div>
          <div><p>{ props.question[count].body }</p></div>
        </div>
        <div className="choice flex">
          {/* とても重要 */}
          <SelectBox icon="far fa-star" onClick={ () => countUpHightImportance(hightImportanceCount + 1) } />
          {/* まあまあ重要 */}
          <SelectBox icon="far fa-circle" onClick={ () => countUpMiddleImportance(middleImportanceCount + 1) } />
          {/* 重要じゃない */}
          <SelectBox icon="fas fa-times" onClick={ () => countUpLowImportance(lowImportanceCount + 1) } />
        </div>
        <p>
          ☆・・・とても重要<br />
          ○・・・まあまあ重要<br />
          x・・・重要ではない<br />
        </p>
        <div className="btn_list">
          {/* <button id="back_btn" className="btn">前へ</button> */}
          {/* <button onClick={ props.onClickRestart } className="btn">最初から</button> */}
          {/* <button onClick={ props.onClickNextStep } className="btn">次へ</button> */}
        </div>
        <small>※ページを更新すると最初からになります。</small>
      </div>
    </div>
  );
}
