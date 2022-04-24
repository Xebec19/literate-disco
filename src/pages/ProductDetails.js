import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const params = useParams();
    console.log(params.id);
    return (
        <section>
            <h1>Product Detail</h1>
        </section>
    )
}

export default ProductDetails