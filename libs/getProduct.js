async function getProducts(uid) {
    const res = await fetch(`https://storefront-933b9-default-rtdb.firebaseio.com/products/${uid}.json`);
    const data = await res.json();
    return data;
  }
  
  export { getProducts };