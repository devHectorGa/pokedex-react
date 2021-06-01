import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './Spinner.styles';

const Spinner = (props) => (
  <SpinnerOverlay {...props}>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
