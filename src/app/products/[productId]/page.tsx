const ProductDetails  = ({params}: {params: {productId: string}}) => {
    return (
        <>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
        </>
    )
}

export default ProductDetails

//dynamic route [productId] 
//products ma sub folder [productId] yo garda dynamic route hune vayo
// http://localhost:3000/products/1 products paxi jati id dida pani products details page mai aauch

//params aafai aau6 next js ma
// /products/[productId] prductsId j diyo params.productId ma tei aaune vayo
