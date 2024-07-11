// ./src/components/NewsList.js

import React, { useState, useEffect } from 'react';

function NewsList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from backend when component mounts
        fetch('http://localhost:5000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <div className="App">
                <div className="container">
                    {articles.map(article => (
                        <div className="card" key={article._id}>
                            <div className="card__body">
                                <span className="tag tag-green">
                                    {article.category}
                                </span>
                                <h4>{article.title}</h4>
                                <p>{article.content}</p>
                            </div>
                            <div className="card__footer">
                                <div className="user">
                                    <div className="user__info">
                                        <h5>{article.author}</h5>
                                        <small>{new Date(article.createdAt).toLocaleDateString()}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsList;
