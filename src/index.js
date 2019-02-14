import React from 'react';
import { render } from 'react-dom';
import App from './App';

const View = () => (
  <div>
    <App/>
  </div>
);

render(<View />, document.getElementById('root'));
