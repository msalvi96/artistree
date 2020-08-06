import React from 'react';

export const Article = ({ article }) => {
    return (
        <article className="article-excerpt">
            <h2>{article.title}</h2>
            <p>{article.body.substring(0, 100)}</p>
        </article>
    )
}