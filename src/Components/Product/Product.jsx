

const Product = ({ product, handleAddToCart }) => {
    console.log(product);
   
    const { image, category, price,title } = product
    return (
        <div>
            <div className="card h-full  bg-base-100 shadow-xl border">
                <figure><img className="h-40 p-2" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>Title: {title}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;