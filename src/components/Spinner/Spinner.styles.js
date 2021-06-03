import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: ${({ small }) => (small ? 'auto' : `60vh`)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${({ dimension }) => dimension || ' 50px'};
  height: ${({ dimension }) => dimension || ' 50px'};
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: var(--color5);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
