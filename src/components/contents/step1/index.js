import React, { useState } from 'react';
import { SelectBox } from '../../selectbox/index';
import Question from '../../question';

export const Step1 = (props) => {
  return (
    <div className="Step1">
      <div className="contents">
        <div className="question">
          <p>直感で選んでください。（{ props.count + 1 }/{ Question.length }）</p>
          <small>※ページを更新すると最初からになります。</small>
          <div><h4>{ Question[props.count].title }</h4></div>
          <div><p>{ Question[props.count].body }</p></div>
        </div>
        <div className="choice flex">
          {/* とても重要 */}
          <SelectBox icon="far fa-star" importance="importance_3" onClick={ props.onClickImportance3 } />
          {/* まあまあ重要 */}
          <SelectBox icon="far fa-circle" importance="importance_2" onClick={ props.onClickImportance2 } />
          {/* 重要じゃない */}
          <SelectBox icon="fas fa-times" importance="importance_1" onClick={ props.onClickImportance1 } />
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
