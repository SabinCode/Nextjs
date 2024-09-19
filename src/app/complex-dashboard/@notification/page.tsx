import Link from "next/link"

const Notification = () => {
    return (
        <>
            <div className="card">
                <h1> Dashboard Notification Page</h1>
                <Link className="underline" href="/complex-dashboard/archived">Archived</Link>
            </div>
        </>
    )
}

export default Notification