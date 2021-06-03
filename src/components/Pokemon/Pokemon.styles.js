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
  text-transform: uppercase;
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

  &.bug {
    background-color: #ab2;
  }
  &.dark {
    background-color: #754;
  }
  &.dragon {
    background-color: #76e;
  }
  &.electric {
    background-color: #fc3;
  }
  &.fairy {
    background-color: #e9e;
  }
  &.fighting {
    background-color: #b54;
  }
  &.fire {
    background-color: #f42;
  }
  &.flying {
    background-color: #89f;
  }
  &.ghost {
    background-color: #66b;
  }
  &.grass {
    background-color: #7c5;
  }
  &.ground {
    background-color: #db5;
  }
  &.ice {
    background-color: #6cf;
  }
  &.normal {
    background-color: #aa9;
  }
  &.psychic {
    background-color: #f59;
  }
  &.poison {
    background-color: #a59;
  }
  &.rock {
    background-color: #ba6;
  }
  &.steel {
    background-color: #aab;
  }
  &.water {
    background-color: #39f;
  }
`;
