import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Main from './components/Main';

const container = document.querySelector('#app');
if (container === null) {
  console.error('The container element could not be found');
} else {
  const root = createRoot(container);
  root.render(<Main />);
}
