import style from './card.module.css';

const Card = ({ icon, title, text, color, position }) => {
	return (
		<div className={`${style.card} ${style[color]} ${style[position]}`}>
			<img src={`/images/${icon}.svg`} alt={`${icon} icon`} />
			<h2 className={style.title}>{title}</h2>
			<p>{text}</p>
			<button style={{ color: `var(--${color})` }}>Learn More</button>
		</div>
	);
};

export default Card;
