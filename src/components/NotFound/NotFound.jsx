import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404 Error</h2>
            <p>Sorry Page Not Found</p>
            <Link to="/" style={{textDecoration: 'none'}}>Back to the homepage...</Link><br/>
            <Link to="/products" style={{textDecoration: 'none'}}>Back to Products...</Link>
        </div>
    )
}

export default NotFound;