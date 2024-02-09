import styled from 'styled-components';

export const HomeTitle = styled.h1`
	font-size: 40px;
	font-style: italic;
	text-align: center;
	color:${p => p.theme.colors.gray};

	text-shadow: 1px 2px 3px ${p => p.theme.colors.white};
	margin-bottom: ${p => p.theme.spacing(15)};
`;
