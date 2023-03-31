import React from 'react';
import './SingleBlog.css';
const SingleBlog = (props) => {
    const {img, name, title, published, authorPic, time} = props.blog;
    return (
        <div className='picture'>
            <img src={img} alt="" />
            <div className='author-data'>
                <div className='author'>
                <div><img src={authorPic} alt="" /></div>
                <div>
                    <h3>{name}</h3>
                    <h3>{published}</h3>
                </div>
                </div>
                <div>
                <div className='bookmark-item'>
                    <div><h5>{time} minuts read</h5></div>
                    <div className='book-icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</div>
                </div>
                
                </div>
            </div>
            <h3>{title}</h3>
            <button>Mark as read</button>
        </div>
    );
};

export default SingleBlog;