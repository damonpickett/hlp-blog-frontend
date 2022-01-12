import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import apiUrl from '../api';

const BlogList = (props) => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/blog_posts/`)
                setBlogList(res.data)
            }
            catch (err) {

            }
        }
        fetchData();
    }, [])

    const getBlogContent = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/blog_posts/${id}`)
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

