import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import apiUrl from '../api';

const BlogList = (props) => {
    const [blogList, setBlogList] = useState([]);

    // Upon the mounting of this component, all blog data is retrieved from the backend
    // The blog post objects are assigned as elements within an array and stored in the blogList state
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

    // Makes an API call using the blog post ID passed by the 'Read' button
    // sets the title state with the title of the blog post, diddo content
    const getBlogContent = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/blog_posts/${id}`)
            props.setTitle(res.data.title)
            props.setContent(res.data.content)
        }
        catch (err) {
        }
    }

    // The map array method iterates over the array elements in blogList
    // For every iteration a list item is returned displaying the title of each blog post
    // A button is also returned which, when clicked, activates the getBlogContent function and passes the blogs id #
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
    
    // if title and content state are set, mount the Blog component
    // otherwise display the jsx found below including the listHTML containing the list of blog titles/read button.
    return props.title && props.content ? (
        <Blog title={props.title} setTitle={props.setTitle} content={props.content} setContent={props.setContent}/>
        ) : (
        <div className='blog-list-page'>
            <div className='intro'>
                <h2>The High Level Programming Blog</h2>
                <p>Welcome to the High Level Programming Blog.</p>
                <p>The purpose of this blog is to translate programming concepts into terms that are accessible and easy to remember.</p>
            </div>
            <h3>Blog Posts</h3>
            <div className='blog-list'>
                {listHTML}
            </div>
        </div>
    )
};

export default BlogList;

