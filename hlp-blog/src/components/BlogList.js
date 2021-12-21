import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const BlogList = (props) => {
    const [blogList, setBlogList] = useState([]);
    const [blogID, setBlogID] = useState();
    

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

    let blogContent = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog_posts/${blogID}`)
            props.setTitle(res.data.title)
            props.setContent(res.data.content)
            console.log(props.title)
            console.log(props.content)
        }
        catch (err) {
            
        }
    }

    let listHTML = blogList.map((listItem) => {
        return (
            <li key={listItem.id}>{listItem.title} <button
                    onClick={() => {
                        setBlogID(listItem.id)
                        blogContent()
                    }}>Read
                </button>
            </li>
        )
    })
    

    return props.title && props.content ? (
        <Navigate to ='/content' />
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

