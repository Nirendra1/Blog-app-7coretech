import React from 'react';
import { Link } from 'react-router-dom';
import './Blogitem.css';





const Blogitem = ({ post }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <p className="card-text">
          <small className="text-muted">{new Date(post.publishedAt).toLocaleDateString()}</small>
        </p>
        <Link
          to={{
            pathname: `/post/${encodeURIComponent(post.title)}`,
            state: { post },
          }}
          className="btn btn-primary"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;

