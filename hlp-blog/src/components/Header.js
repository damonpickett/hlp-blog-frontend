import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {

    return(
        <div>
            <Link to='/'><h1>High Level Programming Blog</h1></Link>
            <p>By Damon Pickett</p>
        </div>
    )
}

export default Header;