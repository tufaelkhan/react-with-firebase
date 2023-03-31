import React from 'react';
import './SingleBlog.css';
const SingleBlog = (props) => {
    const {img, name, title, published, authorPic} = props.blog;
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
                <h5>5 minuts read</h5>
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default SingleBlog;