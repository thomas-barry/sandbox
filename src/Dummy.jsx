import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledDummy = styled.div`
  color: red;
`;

const Dummy = () => {
  return (
    <StyledDummy>
      <div>FOO</div>
      <FontAwesomeIcon icon={faCoffee} />
    </StyledDummy>
  );
};

export default Dummy;
