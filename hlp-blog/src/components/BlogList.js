// import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 

const BlogList = () => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log(process.env.REACT_APP_API_URL)
                const res = await axios.get(`http://localhost:8000/blog_posts/`)
                // useState to set a list
                setBlogList(res.data)
                
            }
            catch (err) {

            }
        }
        fetchData();
    }, [])

    let listHTML = blogList.map((listItem) => {
        return (
            <li>{listItem.title}</li>
        )
    })

    return(
        <div>
            <h3>Entries</h3>
            {listHTML}
            {/* I need to set a state for the list of blog entries */}
            {/* I need to make an API call to my backend  which sets this state */}
            {/* the state is an array of objects */}
            {/* in the return, we return something like {blogList.title} and {bloglist.created_at} */}
            {/* The title needs to link to a Route which shows the content of the post */}

            
        </div>
    )
};

export default BlogList;

// Second goal: have api call return anything from backend
//     ? useEffect, axios, async/away ?
// Third goal: api call returns title and created date from backend for all entries

