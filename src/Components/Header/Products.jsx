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
        <div className="container mx-auto flex my-20 gap-5">
            <div id="products-container" className="w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div id="order-summary" className="w-1/5 bg-[#ff99004d] p-5 rounded">
                <h1 className="text-center text-2xl font-semibold border-2 p-2 border-red-300 rounded-xl bg-slate-200">Order Summary</h1>
            </div>
        </div>
    );
};

export default Products;