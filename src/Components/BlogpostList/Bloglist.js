import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blogitem from '../BlogpostItem/Blogitem';
import './Bloglist.css';

// import { render, screen, fireEvent } from '@testing-library/react';

const Bloglist = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  
  console.log(apiKey,"__________api");


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&pageSize=10&page=${currentPage}&apiKey=${apiKey}`)
        setPosts(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, [currentPage,apiKey]);

  return (
    <div className="container mt-5">
      <h1>Blog-posts</h1>
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Blogitem post={post} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button 
          className="btn btn-primary" 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button 
          className="btn btn-primary" 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Bloglist;





