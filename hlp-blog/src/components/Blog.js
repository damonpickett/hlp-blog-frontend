import { useEffect } from "react";
import BlogList from "./BlogList";

const Blog = (props) => {

    return (
        <div className='blog-post'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Blog;