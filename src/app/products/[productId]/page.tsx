

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (parseInt(params.productId) > 100) {
        throw new Error("Product not found, product id dherai vayo")
    }

    return {
        title: "Product Details",
        description: "Product Details Page"
    }
}

const ProductDetails = ({ params }: { params: { productId: string } }) => {

    if (parseInt(params.productId) > 100) {
        throw new Error("Product not found, product id dherai vayo")
    }

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

//export const generateMetadata = async({params}: {params: {productId: string}}) => {
//    return {
//        title: `Product Details - ${params.productId}`,
//        description: "Product Details Page"
//    }
//}

//yo chai dynamic metadata function generateMetadata garna sakin6. 
