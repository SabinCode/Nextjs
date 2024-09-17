"use client"

const ProductsError = ({error, reset}: {error: Error, reset: () => void} ) => {
    return (
        <>
        <h1>Products Error: Oh no  please try again.  {error.message}</h1>

        <button className="bg-fuchsia-900" onClick={reset}>Try again</button>
        
        </>
    )
}

export default ProductsError

// const ProductsError = () => {
//     return (
//         <>
        
//         <h1>Products Error: Oh no </h1>
//         </>
//     )
// }

// export default ProductsError

//production server error ma error message dekhaudaina . products Error: Oh no matra dekhaucha.
//if we want to show error message in production server, use Client garera client component banauna sakin6

// This is header
// Products Error: Oh no An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.
// This is footer

//yo mathiko error production serverko error ho. including header and footer.
//{error.message} narakhi dekhauda clean huncha. for eg.

// This is header
// Products Error: Oh no
// This is footer

//error page lai products ma narakhi baira rakhyo vane jun thaukopani error catch gar6
// but error aauda header and footer dekhaudaina

//yedi auth folder ma layout sahit aru login register and forgot password jun pageko pani error handle garnalai
//1 level mathi error page rakhna parcha. for.eg. app ma rakhna paryo.
//auth ma error page rakhyo vane pages ko matra error catch garne vayo.

//error aauda try again garda chalna sakne banauna sakin6. for e.g. network nahuda , paxi network aauda. try again garepaxi chalnu paryo.
//tesko lagi error sangai reset vanne  functon props ma paincha.
