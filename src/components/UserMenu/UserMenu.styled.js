import styled from 'styled-components';

export const LogOutBtn = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  padding: 12px;
  width: 100px;
  font-size: ${p => p.theme.fontSizes.sx};
  text-transform: capitalize;
  text-align: center;
  color: ${p => p.theme.colors.hover};
  background-color: transparent;
  border: ${p => p.theme.borders.slim} ${p => p.theme.colors.hover};
  border-radius: ${p => p.theme.radii.middle};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.bgDark};
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;
