import Cards from './components/cards/Cards';
import Card from './components/card/Card';

const App = () => {
	return (
		<>
			<Cards>
				<Card
					icon='sedan'
					title='SEDANS'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					color='orange'
					position='first'
				/>
				<Card
					icon='suv'
					title='SUVS'
					text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
					color='blue'
					position='second'
				/>
				<Card
					icon='luxury'
					title='LUXURY'
					text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
					color='green'
					position='third'
				/>
			</Cards>
		</>
	);
};

export default App;
