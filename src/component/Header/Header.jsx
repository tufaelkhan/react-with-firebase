import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
           <div><h2>programming Blog</h2> </div>
           <div>
            <a href="/java">Java</a>
           <a href="/python">Python</a>
           <a href="/Javascript">JavaScript</a>
           </div>
           <div><img src="https://randomuser.me/api/portraits/men/51.jpg" alt="" /></div>
        </nav>
    );
};

export default Header;