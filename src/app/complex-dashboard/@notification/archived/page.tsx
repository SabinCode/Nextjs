import Link from "next/link"

const ArchivedNotification = () => {
    return (
        <>
       <div className="card">
        <h1>Archived Notification Page</h1>
        <Link className="underline" href="/complex-dashboard">Default</Link>
        </div>
        </>
    )
}

export default ArchivedNotification