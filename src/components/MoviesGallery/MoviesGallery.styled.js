import styled from 'styled-components';

export const MoviesList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: ${p => p.theme.spacing(4)};
`;
