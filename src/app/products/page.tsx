import Link from "next/link"

const ProductsList  = () => {
    return (
        <>
        <h1>Products List</h1>
        <ul>
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            <Link href="/products/3">Product 3</Link>
            <Link href="/products/101">Product 101</Link>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
        </>
    )
}

export default ProductsList

//linking products page to product 1, 2, 3

//template is just like layout but slitely different.
//template le ghereko cheeuharu re-rendering huncha.
//layout le ghereko cheeuharu re-rendering hudaina.