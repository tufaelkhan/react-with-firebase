import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
const Blog = () => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className='blog-container'>
            <div className="all-blog">
                {
                    blogs.map((blog)=> <SingleBlog
                    key={blog.id}
                    blog={blog}
                    ></SingleBlog>)
                }
            </div>
            <div className="blog-side">
        <h3>summay</h3>
            </div>
        </div>
    );
};

export default Blog;