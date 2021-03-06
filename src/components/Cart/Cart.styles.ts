import styled from 'styled-components';

export const Wrapper = styled.aside`
	font-family: Arial, Helvetica, sans-serif;
	width: 500px;
	padding: 20px;

	.clear-btn {
		background-color: #e7e7e7;
		color: black;
		border: none;
		padding: 8px 16px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 8px 2px 16px 2px;
		cursor: pointer;
	}
	.clear-btn:hover {
		background-color: #e1e1e1;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 16px;
	}
	.pay-btn {
		background-color: #34d399;
		border: none;
		padding: 8px 16px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		cursor: pointer;
		color: white;
	}
	.pay-btn:hover {
		background-color: #6ee7b7;
	}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	.exit-btn {
		cursor: pointer;
	}
	.exit-btn:hover {
		transform: scale(1.25);
	}
`;
