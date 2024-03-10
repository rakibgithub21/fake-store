

const Product = ({ product }) => {
    console.log(product);
    const { image, title, category, price } = product
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-40" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;