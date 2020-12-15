import styles from './index.module.scss';

export const SelectBox = (props) => {
  return (
    <div id={ props.importance } className={ styles.box } onClick={ props.onClick } ><i className={ `${props.icon} fa-3x` }></i></div>
  );
}
