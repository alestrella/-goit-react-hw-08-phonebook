import styled from 'styled-components';

export const Item = styled.tr`
  font-size: ${p => p.theme.fontSizes.m};
  border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.none};

  td {
    padding: ${p => p.theme.space[3]}px;
  }
`;

export const Name = styled.td`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const Number = styled.td`
  color: ${p => p.theme.colors.textSecondary};
`;
