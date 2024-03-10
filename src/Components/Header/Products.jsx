import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <div className="container mx-auto flex">
            <div id="products-container" className="w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product= {product}
                        ></Product>)
                    }
                </div>
            </div>
            <div id="order-summary" className="1/5">
                <h1>I am order</h1>
            </div>
        </div>
    );
};

export default Products;