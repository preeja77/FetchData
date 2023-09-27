import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './DataFetchingStyles.css';

function DataFetching() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {post ? (
        <ul className="card-container">
          {post.map((post) => (
            <li key={post.id}>
              <Card className="card-property" >
                <Card.Body className="card-body">
                  <Card.Title className="card-title">ID: {post.id}</Card.Title>
                  <Card.Subtitle className="card-text">
                    <Card.Text>{post.name}</Card.Text>
                    <Card.Text>UserName: {post.username}</Card.Text>
                    <Card.Text>Email: {post.email}</Card.Text>
                    <Card.Text>Address: {post.address.street}</Card.Text>
                    <Card.Text>Company name: {post.company.name}</Card.Text>
                    <Card.Text>Phone: {post.phone}</Card.Text>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        ' '
      )}
    </div>
  );
}

export default DataFetching;
