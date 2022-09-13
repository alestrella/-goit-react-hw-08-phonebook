import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[3]}px;
  width: 100px;
  font-size: ${p => p.theme.fontSizes.sx};
  text-transform: capitalize;
  text-align: center;
  color: ${p => p.theme.colors.accent};
  background-color: transparent;
  border: ${p => p.theme.borders.slim} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.middle};
  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    transform: scale(1.04);
  }
`;
