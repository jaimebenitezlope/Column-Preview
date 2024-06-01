import Cards from './components/cards/Cards';
import Card from './components/card/Card';

const App = () => {
	return (
		<>
			<Cards>
				<Card
					icon='sedan'
					title='Sedan'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					color='orange'
				/>
			</Cards>
		</>
	);
};

export default App;
