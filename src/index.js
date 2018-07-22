import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'web-base-components'

const Index = () => {
  return (
    <div>
      Hello React!
      <Button tabIndex={0}>Primary Button</Button>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
