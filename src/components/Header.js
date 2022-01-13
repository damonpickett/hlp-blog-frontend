import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header(props) {
    function clearState() {
        props.setTitle('')
        props.setContent('')
    }
    return(
        <div className='header'>
            <Link onClick={clearState} to='/'><h1>HLP Blog</h1></Link>
            <p>By <span className='author'>damonPickett</span></p>
        </div>
    )
}

export default Header;