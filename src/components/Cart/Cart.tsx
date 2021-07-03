import CartItem from '../CartItem/CartItem';
import { Wrapper, Header } from './Cart.styles';
import { CartItemType } from '../../App';

type Props = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	closeCart: (param: any) => void;
};

const Cart: React.FC<Props> = ({
	cartItems,
	addToCart,
	removeFromCart,
	clearCart,
	closeCart,
}) => {
	const calculateTotal = (items: CartItemType[]) =>
		items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

	return (
		<Wrapper>
			<Header>
				<h2>Your Shopping Cart</h2>
				<h2 className='exit-btn' onClick={() => closeCart(false)}>
					❌
				</h2>
			</Header>
			<button
				className='clear-btn'
				onClick={() => {
					clearCart();
				}}>
				Empty Cart
			</button>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
		</Wrapper>
	);
};

export default Cart;
