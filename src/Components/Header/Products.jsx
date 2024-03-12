import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import { addToLS, getStoredCart } from "../../utilities/localStorage";

const Products = () => {
    const [cart, setCart] = useState([])
    // console.log(cart);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToLS(product.id)
    }

    let total = 0;

    for (const product of cart) {
        total = product.price + total;
    }


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    //load cart from local storage :
    useEffect(() => {
        // console.log(products.length)
       
        if (products.length > 0) {
            const storedCart = getStoredCart();
            const saveCart = []
            // console.log(storedCart,products);
            for (const id of storedCart) {
                // console.log(id);
                const product = products.find(pd => pd.id === id);
                if (product) {
                    saveCart.push(product)
                }
            }
            console.log(saveCart);
            setCart(saveCart)
        }

    },[products])

    return (
        <div className="container mx-auto flex flex-col-reverse lg:flex-row my-20 gap-5">
            <div id="products-container" className="md:w-4/5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        ></Product>)
                    }
                </div>
            </div>
            <div id="order-summary" className="lg:w-1/5 w-full overflow-auto bg-[#ffec3f] md:bg-[#ffe60049] p-5 rounded-2xl lg:sticky md:top-20 top-16 h-96">
                <h1 className="text-center text-2xl font-semibold border-2 my-3  border-red-300 rounded-xl bg-slate-200">Order Summary</h1>
                <p className="text-2xl">Selected Items: {cart.length}</p>
                <p className="text-xl">Price: {total.toFixed(2)}</p>
                <div className="flex flex-wrap gap-5 ">
                    {cart.map((c,idx) =><img className="w-10 rounded-full" key={idx} src={c.image}></img>)}
                </div>
            </div>
        </div>
    );
};

export default Products;