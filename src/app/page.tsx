"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()
  return (
    <>
      <h1>Home Page</h1>
      <Link className="uderline" href="/login">Login </Link>
      <Link href="/register">Register </Link>
      <Link href="/blog">Blog </Link>
      <Link href="/products" replace={true}>products </Link>

      <button onClick={() => router.push("/products")}>Goto products </button>

    </>
  )
}

export default Home


//NEXT  JS
// -SERVER COMPONENTS
//-NODE JS SERVER
//NO USER UI INTEGRATION
//CAN DO ASYNC STUFFS IN COMPONENT ITSELF
//DEFAULT EXPORT

// -CLIENT COMPONENTS
//-NORMAL VITE-REACT LIKE 
//COMPONENTS - "USE CLIENT"

//replace le /products  ma gayepaxi paila jun route ma link click garera gako tei route ma farkidaina

// Button ma pani  <button onClick={() => router.replace("/")}>Goto Home</button>
//push ko thauma replace rakhna mil6 tara browser history ignore garera arkoi page ma jan6.
//testai back and forward pani hun6.
