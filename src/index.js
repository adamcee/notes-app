import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// array of data
import { notesData } from './notes-data';

ReactDOM.render(
  <React.StrictMode>
    <App notesData={notesData} />
  </React.StrictMode>,
  document.getElementById('root')
);