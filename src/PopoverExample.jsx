import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover Header</Popover.Header>
    <Popover.Body>This is the content of the popover.</Popover.Body>
  </Popover>
);

const PopoverExample = () => {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
      <Button variant="success">Click Me</Button>
    </OverlayTrigger>
  );
};

export default PopoverExample;
