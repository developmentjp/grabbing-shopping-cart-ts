import { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
// Components
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import AutoCarousel from './components/Carousel/AutoCarousel';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Styles
import { Wrapper } from './App.styles';
import Navigation from './components/Navigation/index';
import Typography from '@material-ui/core/Typography';
import Footer from './components/Footer';
// Types
export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as CartItemType[]);
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		'products',
		getProducts
	);

	const getTotalItems = (items: CartItemType[]) =>
		items.reduce((ack: number, item) => ack + item.amount, 0);

	const handleAddToCart = (clickedItem: CartItemType) => {
		setCartItems((prev) => {
			// 1. Is the item already added in the cart?
			const isItemInCart = prev.find((item) => item.id === clickedItem.id);

			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}
			// First time the item is added
			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((ack, item) => {
				if (item.id === id) {
					if (item.amount === 1) return ack;
					return [...ack, { ...item, amount: item.amount - 1 }];
				} else {
					return [...ack, item];
				}
			}, [] as CartItemType[])
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const closeCart = (param: boolean) => {
		setCartOpen(param);
	};

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong ...</div>;

	return (
		<>
			<Navigation
				getTotalItems={getTotalItems}
				cartItems={cartItems}
				closeCart={closeCart}
			/>
			<Wrapper>
				<Drawer
					anchor='right'
					open={cartOpen}
					onClose={() => setCartOpen(false)}>
					<Cart
						cartItems={cartItems}
						addToCart={handleAddToCart}
						removeFromCart={handleRemoveFromCart}
						clearCart={clearCart}
						closeCart={closeCart}
					/>
				</Drawer>
				<Typography
					variant='h5'
					style={{
						color: '#374151',
						marginBottom: '1rem',
						fontWeight: 'bold',
					}}>
					Top Picks
				</Typography>
				<AutoCarousel data={data} />
				<Divider />
				<Typography
					variant='h5'
					style={{
						color: '#374151',
						marginBottom: '1rem',
						marginTop: '1rem',
						fontWeight: 'bold',
					}}>
					Discover New Items
				</Typography>
				<Grid container spacing={3}>
					{data?.map((item) => (
						<Grid item key={item.id} xs={12} sm={4}>
							<Item item={item} handleAddToCart={handleAddToCart} />
						</Grid>
					))}
				</Grid>
				<Footer />
			</Wrapper>
		</>
	);
};

export default App;
