import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import UpdateInput from './Main';
import userEvent from '@testing-library/user-event';
import App from './App';; 
import { domainToASCII } from 'url';
import Search from './components/Search';
import { SearchBar } from 'rsuite/esm/Picker';
import { isElement } from 'react-dom/test-utils';




beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    userEvent.clear
  })

 