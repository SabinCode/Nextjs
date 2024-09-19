import Link from "next/link"

const F2 = () => {
    return (
        <>
        <h1 className="text-3xl font-bold underline">F2 page</h1>
        <Link className="underline" href="/interceptingRoutes/f1">F1</Link>
        <Link className="underline" href="/about">About</Link>
        </>
    )
}

export default F2

//hamile (...)about folder f1 folder ma banayem. teha bata about page mathillo level ma 6.
//mathillo level ko page lai intercept garna three dot use garna pary0.

//(..)(..) yesle chai 2 level mathilko folder lai intercept garcha. But aile issue cha. next version ma fix hun6.

