import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
	padding: 10px 25rem;
	@media (max-width: 1440px) {
		padding: 10px 5rem;
	}
	@media (max-width: 1280px) {
		padding: 10px 5rem;
	}
	@media (max-width: 720px) {
		padding: 10px 2.5rem;
	}
	@media (max-width: 600px) {
		padding: 10px 1rem;
	}

	display: flex;
	flex-direction: column;
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #374151;
	}
	span {
		cursor: pointer;
	}
	.top__links1:hover {
		color: #6b7280;
	}
	.top__links2:hover {
		color: #6b7280;
	}
	.top__links3:hover {
		color: #6b7280;
	}
	.top__links4:hover {
		color: #6b7280;
	}
	.top__icon1 {
		display: flex;
		align-items: center;
	}
	.top__icon2 {
		display: flex;
		align-items: center;
	}
	.top__icon3 {
		display: flex;
		align-items: center;
	}
	.top__icon1:hover {
		color: #6b7280;
	}
	.top__icon2:hover {
		color: #6b7280;
	}
	.top__icon3 :hover {
		color: #6b7280;
	}
	.bottom {
		margin-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.bottom__title {
		display: flex;
		align-items: center;
	}
	.searchBar {
		color: #374151;
		flex-grow: 1;
		margin: 0rem 4rem;
	}
	.searchBar__recommendations {
		padding-left: 2px;
		cursor: pointer;
	}
`;

export const StyledButton = styled(IconButton)``;
