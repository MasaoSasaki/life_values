export const Step2 = (props) => {
  return (
    <div id="step2">
      <div className="contents">
        <p>
          次に、先ほど選んでいただいた☆の中から<br />
          更に重要なものを10項目まで絞ります。
        </p>
        <button onClick={ props.onClickRestart } className="btn">最初から</button>
        <button onClick={ props.onClickNextStep } className="btn">次へ</button>
      </div>
    </div>
  );
}
