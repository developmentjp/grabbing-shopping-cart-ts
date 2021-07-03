import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia } from '@material-ui/core';
import { Wrapper } from './AutoCaraousel.styles';
import PromoCards from './PromoCards';

const AutoCarousel: React.FC<any> = (props) => {
	const { data } = props;

	return (
		<Wrapper>
			<Carousel>
				{data.slice(0, 5).map((item: any, i: number) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
			<section>
				{data.slice(0, 2).map((item: any, i: number) => (
					<PromoCards key={i} item={item} />
				))}
			</section>
		</Wrapper>
	);
};

const Item: React.FC<any> = (props) => {
	const { item } = props;

	return (
		<Card>
			<div style={{ width: '500px', marginRight: '2rem' }}>
				<CardMedia
					component='img'
					alt='Image Banner'
					height='600'
					image={item.image}
					title={item.title}
				/>
			</div>
		</Card>
	);
};
export default AutoCarousel;
