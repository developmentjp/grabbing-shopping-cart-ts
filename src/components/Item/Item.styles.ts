import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
		0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	height: 100%;

	button {
		border-radius: 0 0 20px 20px;
	}

	img {
		max-height: 350px;
		object-fit: cover;
		border-radius: 20px 20px 0 0;
	}

	div {
		font-family: Arial, Helvetica, sans-serif;
		padding: 1rem;
		height: 100%;
	}
`;
