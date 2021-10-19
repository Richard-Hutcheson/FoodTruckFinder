import React from 'react';
import Link from '@material-ui/core/Link';

require('dotenv').config();

function HomePage() {
    return (
        <div class = "header">
            <h1>Food Truck Finder</h1>
            <h2>LOGIN</h2>
            <Link href="/dashboard">
                <a>login</a>
            </Link>

        </div>
    )
}

export default HomePage