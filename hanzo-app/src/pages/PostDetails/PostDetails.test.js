import React from 'react';
import { render } from '@testing-library/react';
import PostDetails from './PostDetails';

test('renders learn react link', () => {
  const { getByText } = render(<PostDetails />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
