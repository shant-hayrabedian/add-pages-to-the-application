import {Link} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <nav className="navbar">
            <h1>Adding pages to the application</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Product List</Link>
                {/*<Link to='/create' href="/create"*/}
                {/*>New Blog</Link>*/}
            </div>
        </nav>
    );
}

export default Header;