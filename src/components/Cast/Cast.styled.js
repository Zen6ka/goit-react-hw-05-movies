import styled from 'styled-components';

export const CastList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: ${p => p.theme.spacing(4)};
`;

export const CastItem = styled.li`
	width: 180px;
	display: flex;
	flex-direction: column;
	background-color: ${p => p.theme.colors.pink};
	border-radius: ${p => p.theme.radii.md};
	overflow: hidden;
	box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.white};
`;

export const CastPhoto = styled.img`
	width: 100%;
	height: 240px;
	object-fit: cover;
`;

export const CastInfoBox = styled.div`
	width: 100%;
	height: 140px;
	padding: ${p => p.theme.spacing(4)};
`;
export const CastInfoTitle = styled.h3`
	font-size: 16px;
	color: ${p => p.theme.colors.white};
	margin-bottom: ${p => p.theme.spacing(3)};
`;

export const CastInfoText = styled.p`
	font-style: normal;
	color: ${p => p.theme.colors.white};
	font-weight: 500;
`;

export const CastAccent = styled.span`
	font-style: normal;
	font-weight: 500;
	text-shadow: 0.5px 0.5px 0.5px ${p => p.theme.colors.white};
`;
