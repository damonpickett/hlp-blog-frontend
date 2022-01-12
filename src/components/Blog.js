import { useEffect } from "react";
import BlogList from "./BlogList";

const Blog = (props) => {

    // This function takes the content state and adds react's '___html' key
    const blogContent = () => {
        return {__html: props.content}
    }

    // 'dangerously' calls the blogContent function and converts the html
    return (
        <div className='blog-post'>
            <h3>{props.title}</h3>
            <div className='content' dangerouslySetInnerHTML={blogContent()} />
        </div>
    )
}

export default Blog;