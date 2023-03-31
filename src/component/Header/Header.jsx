import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
           <h2>programming Blog</h2> 
           <div>
            <a href="/java">Java</a>
           <a href="/python">Python</a>
           <a href="/Javascript">JavaScript</a>
           </div>
        </nav>
    );
};

export default Header;