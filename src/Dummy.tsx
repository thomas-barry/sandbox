import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const StyledDummy = styled.div`
  color: red;
`;

const Dummy = () => {
  const dateStr1 = '2019-09-12T20:55:04.8092762Z';
  const dateStr2 = '2019-09-12T20:55:04.8092762+00:00';
  const dateStr3 = '2022-06-03T12:00:00Z';

  const m1 = moment(dateStr1);
  const m2 = moment(dateStr2);
  const m3 = moment(dateStr3);

  return (
    <StyledDummy>
      <div>One: {m1.format('YYYY-MM-DD')}</div>
      <div>Two: {m2.format('YYYY-MM-DD')}</div>
      <div>Three: {m3.format('YYYY-MM-DD')}</div>
    </StyledDummy>
  );
};

export default Dummy;
