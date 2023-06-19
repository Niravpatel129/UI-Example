import { render } from '@testing-library/react';
import React from 'react';
import DropdownInput from './DropdownInput';

test('renders DropdownInput without crashing', () => {
  render(<DropdownInput options={[]} value="" onChange={() => {}} />);
});
