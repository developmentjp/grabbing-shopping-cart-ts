import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginTop: '1rem',
		},
		details: {
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			flex: '1 0 auto',
		},
		cover: {
			width: '151px',
		},
	})
);

const PromoCards: React.FC<any> = (props) => {
	const classes = useStyles();
	const { item } = props;
	console.log(item);

	return (
		<Card
			className={classes.root}
			style={{
				boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
			}}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5' style={{ color: '#374151' }}>
						{item.title}
					</Typography>
					<Rating
						style={{
							marginLeft: '-5px',
							marginTop: '10px',
							marginBottom: '10px',
						}}
						name='read-only'
						value={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
						readOnly
					/>
					<Typography variant='subtitle1' style={{ color: '#6B7280' }}>
						{item.description}
					</Typography>
					<Typography
						variant='subtitle1'
						color='textSecondary'
						style={{ fontWeight: 'bolder', marginTop: '1rem' }}>
						Price: $
						<span style={{ textDecoration: 'line-through' }}>{item.price}</span>{' '}
						${item.price - item.price * 0.5}{' '}
						<span style={{ color: 'red', fontStyle: 'italic' }}>
							&nbsp;50% OFF!
						</span>
					</Typography>
				</CardContent>
			</div>
			{/* <CardMedia
				className={classes.cover}
				image={item.image}
				title={item.title}
			/> */}
		</Card>
	);
};

export default PromoCards;
