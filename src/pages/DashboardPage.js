import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <section>
            <h1>Hello Artistree</h1>
            <p>This is the new hub...</p>

            <Link to="/articles" className="button">View Articles</Link>
        </section>
    )
}

export default DashboardPage;