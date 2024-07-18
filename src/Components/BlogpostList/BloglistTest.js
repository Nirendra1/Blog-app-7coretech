import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import axios from 'axios';
const axios = require('axios');

import Bloglist from './Bloglist';

jest.mock('axios');

const mockPosts = [
  {
    title: 'Test Post 1',
    description: 'Description 1',
    publishedAt: '2024-07-17T12:34:56Z',
    urlToImage: 'https://via.placeholder.com/150',
    content: 'Full content of Test Post 1',
  },
  {
    title: 'Test Post 2',
    description: 'Description 2',
    publishedAt: '2024-07-18T12:34:56Z',
    urlToImage: 'https://via.placeholder.com/150',
    content: 'Full content of Test Post 2',
  },
];

test('renders Bloglist and paginates', async () => {
  axios.get.mockResolvedValue({ data: { articles: mockPosts, totalResults: 20 } });

  render(<Bloglist />);

  expect(await screen.findByText('Test Post 1')).toBeInTheDocument();
  expect(await screen.findByText('Test Post 2')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Next'));
  expect(axios.get).toHaveBeenCalledTimes(2); // First for initial load, second for pagination
});
