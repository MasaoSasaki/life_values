import Question from '../../question';
import styles from './index.module.scss';

export const Step2 = (props) => {
  return (
    <div id={ styles.step2 }>
      <div className="contents">
        <p>
          次に、先ほど選んでいただいた☆の中から<br />
          更に重要なものを10項目まで絞ります。
        </p>
        <ul>
          { props.step1Array.map((importance, index) => {
            if (importance === 1 || importance === 2) { return }
            console.log(index, importance);
            console.log(Question[index].title, Question[index].body);
            return <li><span>{ Question[index].title }</span><span>{ Question[index].body }</span><span></span></li>
          }) }
        </ul>
        {/* <button onClick={ props.onClickRestart } className="btn">最初から</button>
        <button onClick={ props.onClickNextStep } className="btn">次へ</button> */}
      </div>
    </div>
  );
}
