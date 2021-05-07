// import BlogList from "./BlogList";
import useFetch from "../UseFetch/UseFetch";

import ProductList from "../ProductList/ProductList";

const Home = () => {
    // const { error, isPending, data: blogs } = useFetch('././product_list.json')

    return (
        <div className="home">
            {/*{ error && <div>{ error }</div> }*/}
            {/*{ isPending && <div>Loading...</div> }*/}
            {/*{ blogs && <ProductList blogs={blogs} /> }*/}
            <h2>Welcome To Adding Page Please open the Lists and see what we have</h2>
        </div>
    );
}

export default Home;