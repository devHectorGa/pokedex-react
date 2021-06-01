import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-template-rows: repeat(auto-fill, 10rem);
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  gap: 1rem;
  width: 90%;
`;
