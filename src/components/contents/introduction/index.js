export const Introduction = (props) => {
  return (
    <div className="Introduction">
      <div className="contents">
        <h3>遊び方</h3>
        <p>これから、合計８０問の設問が一つずつ表示されます。<br />
          それぞれ３択の中からあなたにとっての重要度を、できるだけ<strong>直感</strong>で選んでください。</p>
        <p>
          ☆・・・とても重要<br />
          ○・・・まあまあ重要<br />
          x・・・重要ではない<br />
        </p>
        <button className="start-btn" onClick={ props.onClick }>開始する</button>
      </div>
    </div>
  );
}
