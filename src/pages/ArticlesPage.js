import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articlesActions';
import { Article } from '../components/article';

const ArticlesPage = ({ dispatch, loading, articles, hasErrors }) => {
    useEffect(() => {
        console.log({
            articles,
            loading,
            hasErrors
        })
        dispatch(fetchArticles())
        console.log({
            articles,
            loading,
            hasErrors
        })
    }, [dispatch])

    const renderArticles = () => {
        if (loading) return <p>Loading Posts...</p>
        if (hasErrors) return <p>Unable to display posts...</p>
        if (articles) return articles.map((art) => <Article key={art.id} article={art}></Article>)
    }

    return (
        <section>
            <h1>Articles Page</h1>
            {renderArticles()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.articles.loading,
    articles: state.articles.articles,
    hasErrors: state.articles.hasErrors
})

export default connect(mapStateToProps)(ArticlesPage);