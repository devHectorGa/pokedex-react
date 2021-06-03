import styled from 'styled-components';
import { Link as LinkParent } from 'react-router-dom';

export const Container = styled.header`
  height: 7rem;
  background-color: var(--color3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(LinkParent)`
  font-size: 2.5rem;
  text-decoration: none;
  color: var(--color5);
  text-transform: capitalize;
`;
