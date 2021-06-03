import styled from 'styled-components';

export const Container = styled.article`
  background-color: var(--color5);
  color: var(--color3);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px var(--color3);
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img``;

export const Text = styled.p`
  margin: 0;
  text-transform: capitalize;
`;

export const TypesContainer = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

export const Type = styled.div`
  padding: 0.2rem;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  color: var(--color3);
`;
