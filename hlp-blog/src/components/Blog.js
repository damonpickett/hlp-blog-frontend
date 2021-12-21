import BlogList from "./BlogList";

const Blog = (props) => {
    return (
        <div>
            {props.title}
            {props.content}
        </div>
    )
}

export default Blog;