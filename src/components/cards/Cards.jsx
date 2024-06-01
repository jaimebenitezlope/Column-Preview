import style from './cards.module.css';

const Cards = ({ children }) => {
	return <div className={style.cards}>{children}</div>;
};

export default Cards;
