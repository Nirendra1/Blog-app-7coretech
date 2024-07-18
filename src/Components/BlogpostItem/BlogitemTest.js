import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blogitem from './Blogitem';

const mockPost = {
  title: 'Test Post 1',
  description: 'Description 1',
  publishedAt: '2024-07-17T12:34:56Z',
  urlToImage: 'https://via.placeholder.com/150',
  content: 'Full content of Test Post 1',
};

test('renders Blogitem', () => {
  const { getByText, getByAltText } = render(
    <Router>
      <Blogitem post={mockPost} />
    </Router>
  );

  expect(getByText('Test Post 1')).toBeInTheDocument();
  expect(getByText('Description 1')).toBeInTheDocument();
  expect(getByText(new Date(mockPost.publishedAt).toLocaleDateString())).toBeInTheDocument();
  expect(getByAltText('Test Post 1')).toBeInTheDocument();
});
