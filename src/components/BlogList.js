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
            <div>
                <li key={listItem.id}>{listItem.title}</li>
                <button
                        onClick={() => {
                            getBlogContent(listItem.id)
                        }}>Read
                    </button>
            </div>
        )
    })
    
    return props.title && props.content ? (
        <Blog title={props.title} setTitle={props.setTitle} content={props.content} setContent={props.setContent}/>
        ) : (
        <div className='blog-list-page'>
            <div className='intro'>
                <h2>The High Level Programming Blog</h2>
                <p>Welcome to the High Level Programming Blog.</p>
                <p>The purpose of this blog is to translate programming concepts into terms that are accessible and easy to remember</p>
            </div>
            <h3>Blog Posts</h3>
            <div className='blog-list'>
                {listHTML}
            </div>
        </div>
    )
};

export default BlogList;

