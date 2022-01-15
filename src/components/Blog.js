
const Blog = (props) => {
    function clearState() {
        props.setTitle('')
        props.setContent('')
    }

    // This function takes the content state and adds react's '___html' key
    const blogContent = () => {
        return {__html: props.content}
    }

    // 'dangerously' calls the blogContent function and converts the html
    // 'Homepage' button clears the title and content state, this causes the BlogList component to mount
    return (
        <div className='blog-post'>
            <h3>{props.title}</h3>
            <div className='content' dangerouslySetInnerHTML={blogContent()} />
            <button onClick={clearState}>Homepage</button>
        </div>
    )
}

export default Blog;