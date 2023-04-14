import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='hidden flex flex-col justify-center items-center text-2xl gap-6 text-center mt-28'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/schedule'>Schedule</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/classes'>Classes</Link>
        </div>
    );
}

export default NavBar;