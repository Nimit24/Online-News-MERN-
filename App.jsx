// src/App.js

import React, { useState } from "react";
import NewArticleForm from "./components/NewArticleForm.jsx";
import DeleteArticle from "./components/DeleteArticle.jsx";
import NewsList from "./components/NewsList.jsx";
import "./index.css";

function App() {
    const [isAuther, setAuther] = useState(false);

    return (
        <div className={isAuther ? 'author-view' : ''}>
            <div className="around">
                <h1>Online News Articles</h1>
                <button onClick={() => setAuther(!isAuther)}>
                    Switch to {isAuther ? "Viewer" : "Author"}
                </button>
            </div>
            {isAuther ? (
                <>
                    <NewArticleForm setAuther={setAuther} />
                    <DeleteArticle />
                </>
            ) : (
                <NewsList />
            )}
        </div>
    );
}

export default App;
