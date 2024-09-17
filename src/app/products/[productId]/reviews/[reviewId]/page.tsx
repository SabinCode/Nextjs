import { notFound } from "next/navigation"

const ReviewDetails = ({params}: {params: {productId: string, reviewId: string}}) => {   

    if(parseInt(params.reviewId)> 10){
        notFound()
    }
    return (<>
        <h1>Review Details for</h1>
        <p>{params.productId}</p>
        <p>{params.reviewId}</p>
        </>
    )
}

export default ReviewDetails

//nested dynamic routes
//products/[productId]/reviews/[reviewId]
//folder subfolder subfolder subfolder but dynamice route hunalai [productId] and [reviewId] chayo


//10 vanda badi product id search garda not found programmatically dekhaunalai  if(parseInt(params.reviewId)> 10){
    //     notFound()
    // }  yo notfound function next/navigation bata import garna sakin6