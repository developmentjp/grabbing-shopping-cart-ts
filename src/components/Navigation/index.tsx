import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from './Nav.styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		color: '#374151',
	},
	title: {
		fontSize: '1.75rem',
		color: '#374151',
	},
}));

type Props = {
	cartItems: any[];
	getTotalItems: (cartItems: any) => number;
	closeCart: (param: any) => void;
};

const Navigation: React.FC<Props> = ({
	cartItems,
	getTotalItems,
	closeCart,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' style={{ background: '#D1D5DB', zIndex: -10 }}>
				<Wrapper>
					<div className='top'>
						<div className='top__links'>
							<Typography variant='caption'>
								<span className='top__links1'>Customer Service</span>
								&nbsp;|&nbsp;
								<span className='top__links2'>Payment Methods</span>
								&nbsp;|&nbsp;
								<span className='top__links3'>Contact Email</span>
								&nbsp;|&nbsp;<span className='top__links4'>Privacy Policy</span>
							</Typography>
						</div>
						<div>
							<Typography variant='caption' style={{ display: 'flex' }}>
								<span className='top__icon1'>
									<HelpOutlineIcon />
									&nbsp;Help
								</span>
								&nbsp;&nbsp;&nbsp;
								<span className='top__icon2'>
									<ShoppingBasketIcon />
									&nbsp;Suggestions
								</span>
								&nbsp;&nbsp;&nbsp;
								<span className='top__icon3'>
									<InfoIcon />
									&nbsp;About Us
								</span>
							</Typography>
						</div>
					</div>

					<div className='bottom'>
						<div className='bottom__title'>
							<IconButton
								edge='start'
								className={classes.menuButton}
								aria-label='menu'>
								<SportsHandballIcon />
							</IconButton>
							<Typography variant='h6' className={classes.title}>
								Grabbing
							</Typography>
						</div>
						<div className='searchBar'>
							<SearchBar
								value=''
								// onChange={(newValue) => this.setState({ value: newValue })}
								// onRequestSearch={() => doSomethingWith(this.state.value)}
								placeholder='Search Items'
							/>
							<Typography
								variant='caption'
								className='searchBar__recommendations'>
								Clothes&nbsp;&nbsp;Mobile
								Phones&nbsp;&nbsp;Laptops&nbsp;&nbsp;Computers&nbsp;&nbsp;Earphones&nbsp;&nbsp;Jewelry
							</Typography>
						</div>
						<StyledButton onClick={() => closeCart(true)}>
							<Badge badgeContent={getTotalItems(cartItems)} color='error'>
								<AddShoppingCartIcon style={{ color: '#374151' }} />
							</Badge>
						</StyledButton>
					</div>
				</Wrapper>
			</AppBar>
		</div>
	);
};

export default Navigation;
