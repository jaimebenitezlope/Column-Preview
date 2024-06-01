import style from './card.module.css';

const Card = ({ icon, title, text, color }) => {
	return (
		<div className={style[color]}>
			<img src={`/images/${icon}.svg`} alt={`${icon} icon`} />
			<h2>{title}</h2>
			<p>{text}</p>
			<button className=''>Learn More</button>
		</div>
	);
};

export default Card;
