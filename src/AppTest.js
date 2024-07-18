// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders Bloglist and navigates to Blogdetail', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(await screen.findByText('Test Post 1')).toBeInTheDocument();

  // Simulate navigation to Blogdetail
  fireEvent.click(screen.getByText('Read more'));

  // Check if Blogdetail is rendered
  expect(await screen.findByText('Full content of Test Post 1')).toBeInTheDocument();
});
