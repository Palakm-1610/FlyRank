import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {SettingsV1} from '../src/index';

test('renders input with required attribute (vague impl)', ()=>{
  render(<SettingsV1 onSubmit={()=>{}}/>);
  const input = screen.getByPlaceholderText('Your name');
  expect(input).toBeInTheDocument();
  expect(input).toBeRequired();
});
