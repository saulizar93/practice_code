import React from 'react';
import { Link } from 'react-router-dom';

export default function homePage() {
    return(
        <div>
        <h1>Welcome</h1>
        <Link to='/frontpage'>
            <button>Front Page</button>
        </Link>
        </div>
    )
}