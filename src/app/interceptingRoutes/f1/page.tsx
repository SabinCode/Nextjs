import Link from "next/link"

const F1 = () => {
    return (
        <>
        <h1 className="text-3xl font-bold underline">F1 page</h1>
        <Link className="underline" href="/interceptingRoutes/f1/f2">F2</Link>
        </>
    )
}

export default F1 