import Link from "next/link"

const InterceptedF1Page = () => {
    return (   
        <>
        <h1 className="text-3xl font-bold underline">Intercepted F1 page</h1>
        <Link href="/interceptingRoutes/f1/f2">F2</Link>
        </>
    )
}

export default InterceptedF1Page

//ek level bairako or mathiko route or page lai  intercept garnalai, tei folderma (..)f1 yeesle f1 folder lai intercept garcha.

//F1 page ko link ma jana khojda paila InterceptedF1Page ma pugcham. ani refresh garda F1 page ma pugcham.

//F2 ko case ma they both are in same level folder. So we did only (.)F2 yesle F2 page lai intercept garcha.

//(...)about yo 3 ta ... le chai mathilko level haruma vet6