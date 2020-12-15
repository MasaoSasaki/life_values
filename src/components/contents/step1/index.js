// import React, { useState } from 'react';
import { SelectBox } from '../../selectbox/index';

export const Step1 = (props) => {
  return (
    <div className="Step1">
      <div className="contents">
        <div className="question">
          <p>直感で選んでください。（{ props.count + 1 }/{ props.question.length }）</p>
          <small>※ページを更新すると最初からになります。</small>
          <div><h4>{ props.question[props.count].title }</h4></div>
          <div><p>{ props.question[props.count].body }</p></div>
        </div>
        <div className="choice flex">
          {/* とても重要 */}
          <SelectBox icon="far fa-star" onClick={ props.countUpHightImportance } />
          {/* まあまあ重要 */}
          <SelectBox icon="far fa-circle" onClick={ props.countUpMiddleImportance } />
          {/* 重要じゃない */}
          <SelectBox icon="fas fa-times" onClick={ props.countUpLowImportance } />
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
