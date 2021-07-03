import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
	<Wrapper>
		<img src={item.image} alt={item.title} />
		<div>
			<h3 style={{ color: '#374151' }}>{item.title}</h3>
			<Rating
				style={{ marginLeft: '-5px', marginTop: '10px' }}
				name='read-only'
				value={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
				readOnly
			/>
			<p style={{ marginTop: '10px', color: '#6B7280' }}>{item.description}</p>
			<h3 style={{ marginTop: '10px', color: '#374151it' }}>
				$
				{item.price === 109.95 || item.price === 22.3
					? item.price - item.price * 0.5
					: item.price}
			</h3>
		</div>
		<Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
	</Wrapper>
);

export default Item;
