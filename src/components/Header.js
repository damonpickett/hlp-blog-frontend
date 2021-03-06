import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header(props) {
    function clearState() {
        props.setTitle('')
        props.setContent('')
    }
    return(
        <div className='header'>
            {/* link activates clearState function as creating this condition mounts the BlogList component */}
            <Link onClick={clearState} to='/'><h1>HLP Blog</h1></Link>
            <p>By <a href='https://damonpickett.github.io/damonpickett/' target='_blank' rel='noreferrer'><span className='author'>damonPickett</span></a></p>
        </div>
    )
}

export default Header;