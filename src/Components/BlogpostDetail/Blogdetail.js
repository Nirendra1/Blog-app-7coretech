
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams, Link } from 'react-router-dom';
import './Blogdetail.css';

const Blogdetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const [post, setPost] = useState(location.state?.post || null);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!post) {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(id)}&apiKey=${apiKey}`);
          setPost(response.data.articles[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchPost();
  }, [id, post]);
  

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} className="img-fluid mb-4" />}
      <p>{post.content}</p>
      <Link to="/" className="btn btn-primary mt-4">Back to list</Link>
    </div>
  );
};

export default Blogdetail;