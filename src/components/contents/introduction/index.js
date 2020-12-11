export const Introduction = (props) => {
  return (
    <div className="Introduction">
      <div className="contents">
        <h3>遊び方</h3>
        <p>これから、合計{ props.question.length }問の設問が一つずつ表示されます。<br />
          それぞれの質問に対し、３択の中から"あなたにとっての重要度"を、できるだけ<strong>直感</strong>で選んでください。
        </p>
        <button className="start-btn" onClick={ props.onClickNextStep }>開始する</button>
      </div>
    </div>
  );
}
