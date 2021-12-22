import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header(props) {
    function clearState() {
        props.setTitle('')
        props.setContent('')
    }
    return(
        <div>
            <Link onClick={clearState} to='/'><h1>High Level Programming Blog</h1></Link>
            <p>By Damon Pickett</p>
        </div>
    )
}

export default Header;