import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
const Blog = () => {
    // console.log(props)

    const [blogs, setBlogs]=useState([])
    const [blog, setBlog] = useState([])
    const [somoy, setSomoy]= useState('')

    const handleBook =(title) =>{
        const newBlog = [...blog, title];
        setBlog(newBlog);
        // console.log(title)
    }
    const watchTime =(somoy)=>{
        const previousTime = JSON.parse(localStorage.getItem('watch'));
        if(previousTime){
            const sum = previousTime + somoy;
            localStorage.setItem('watch', sum)
            setSomoy(sum)
        }else{
            localStorage.setItem('watch', somoy)
            setSomoy(somoy)
        }
      }

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
                    handleBook={handleBook}
                    watchTime={watchTime}
                    ></SingleBlog>)
                }
                
            </div>
            <div className="blog-side">
        <h3>spent time to read: {somoy}</h3>
        <h3>Bookmarked Blogs: {blog.length}</h3>
       <div><h3>{blog}</h3></div>
            </div>
        </div>
    );
};

export default Blog;