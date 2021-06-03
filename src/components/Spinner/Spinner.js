import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './Spinner.styles';

const Spinner = (props) => (
  <SpinnerOverlay {...props}>
    <SpinnerContainer {...props} />
  </SpinnerOverlay>
);

export default Spinner;
