const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];

}


const saveCartToLS = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    // save cart to local storage
    saveCartToLS(cart)
}




export {
    getStoredCart,
    addToLS,
    saveCartToLS,

}