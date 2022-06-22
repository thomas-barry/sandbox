import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import ModalExample from './ModalExample';
import PopoverExample from './PopoverExample';

const App = () => {
  useEffect(() => {
    const array = [9, 4, 3, 7, 1, 8, 6, 2];
    const sorted = array.slice().sort();
    for (let i = 0; i < sorted.length - 1; i++) {
      if (sorted[i] + 1 !== sorted[i + 1]) {
        console.log('Missing number:', sorted[i + 1]);
        break;
      }
    }
  }, []);

  return (
    <div id="app-container">
      <Container className="p-3">
        <PopoverExample />
        <ModalExample />
      </Container>
    </div>
  );
};

export default App;
