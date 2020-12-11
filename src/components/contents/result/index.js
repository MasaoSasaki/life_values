export const Result = (props) => {
  return(
    <div id="Result">
      <div className="contents">
        <p>
          あなたが最も大切としている価値観は以下になりました！<br />
        </p>
        <button onClick={ props.onClickRestart } className="btn">最初から</button>
      </div>
    </div>
  );
}
