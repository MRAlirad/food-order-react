import { Fragment, useState } from 'react';
import Header from './components/Layout/Header.jsx';
import Meals from './components/Meals/Meals.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
	const [isShowCart, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<Fragment>
			{isShowCart && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
