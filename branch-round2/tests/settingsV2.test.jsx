import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {SettingsV2} from '../src/index';

test('shows validation errors and calls onSubmit when valid', async ()=>{
  const handle = vi.fn();
  render(<SettingsV2 onSubmit={handle}/>);

  const submit = screen.getByText('Save');
  fireEvent.click(submit);

  // errors should show
  expect(await screen.findByRole('alert')).toBeInTheDocument();

  // fill valid data
  fireEvent.change(screen.getByLabelText('displayName'), {target:{value:'Alex'}});
  fireEvent.change(screen.getByLabelText('email'), {target:{value:'alex@example.com'}});
  fireEvent.click(submit);

  expect(handle).toHaveBeenCalled();
});
