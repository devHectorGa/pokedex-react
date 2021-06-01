import styled from 'styled-components';

export const Container = styled.article`
  background-color: var(--color4);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Image = styled.img``;
