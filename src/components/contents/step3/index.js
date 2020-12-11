export const Step3 = (props) => {
  return(
    <div id="step3">
      <div className="contents">
        <p>
          次に、先ほど選んでいただいた10項目を<br />
          優先度1位から10位まで順番を決めます。
        </p>
        <button onClick={ props.onClickRestart } className="btn">最初から</button>
        <button onClick={ props.onClickNextStep } className="btn">次へ</button>
      </div>
    </div>
  );
}
