import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Blog from './Blog';

const BlogList = (props) => {
    const [blogList, setBlogList] = useState([]);
    // const [blogID, setBlogID] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog_posts/`)
                setBlogList(res.data)
            }
            catch (err) {

            }
        }
        fetchData();
    }, [])

    const getBlogContent = async (id) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog_posts/${id}`)
            props.setTitle(res.data.title)
            props.setContent(res.data.content)
        }
        catch (err) {
            
        }
    }

    let listHTML = blogList.map((listItem) => {
        return (
            <li key={listItem.id}>{listItem.title} <button
                    onClick={() => {
                        getBlogContent(listItem.id)
                    }}>Read
                </button>
            </li>
        )
    })
    
    return props.title && props.content ? (
        <Blog title={props.title} setTitle={props.setTitle} content={props.content} setContent={props.setContent}/>
        ) : (
        <div>
            <h3>Blog Posts</h3>
            {listHTML}
        </div>
    )
};

export default BlogList;

// Second goal: have api call return anything from backend
//     ? useEffect, axios, async/away ?
// Third goal: api call returns title and created date from backend for all entries

