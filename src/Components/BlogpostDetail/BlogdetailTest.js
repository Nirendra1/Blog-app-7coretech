import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blogdetail from './Blogdetail';

const mockPost = {
  title: 'Test Post 1',
  description: 'Description 1',
  publishedAt: '2024-07-17T12:34:56Z',
  urlToImage: 'https://via.placeholder.com/150',
  content: 'Full content of Test Post 1',
};

test('renders Blogdetail with post data', () => {
  render(
    <Router initialEntries={['/post/test-post-1']}>
      <Route path="/post/:id">
        <Blogdetail />
      </Route>
    </Router>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument(); // Since useEffect fetches data async

  // Simulate loading of post data
  setTimeout(() => {
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Full content of Test Post 1')).toBeInTheDocument();
    expect(screen.getByAltText('Test Post 1')).toBeInTheDocument();
  }, 1000); // Adjust timeout as per your async fetch delay
});
