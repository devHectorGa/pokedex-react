import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 2rem;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    margin: 2rem auto;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Section = styled.div`
  background-color: var(--color5);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  padding: 0.5rem;
  max-width: 60%;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--color3);
  margin: 0.5rem;
`;

export const StatText = styled(Text)`
  font-size: 1.5rem;
`;

export const StatContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 80%;
`;
