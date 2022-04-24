import { NavLink } from "react-router-dom";
const Product = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><NavLink to="/product-detail/1">A Book</NavLink></li>
                <li><NavLink to="/product-detail/2">A Mobile</NavLink></li>
                <li><NavLink to="/product-detail/3">A Laptop</NavLink></li>
            </ul>
        </section>
    )
}
export default Product;