import "./styles.css"
const DashboardLayout = ({ children, notification, analytics, charts, login}: {
    children: React.ReactNode,
    notification: React.ReactNode,
    analytics: React.ReactNode,
    charts: React.ReactNode,
    login: React.ReactNode,
}) => {

    const loggedIn = true

    return (
        <>
            <h1 className="text-3xl font-bold underline">Complex Dashboard Layout</h1>

            {loggedIn ? (
                <div className="flex">

            {children}
            <div className="flex">
                {notification}
                {analytics}
                {charts}
                </div>
                
            </div>) : (login)}
        </>
    )
}

export default DashboardLayout

//yo DashboardLayout ma complex-dashboard ma  vayeko page haru as a props children jastai  aaune vayo .
//tyo pageharu ko type React.ReactNode

//conditonally rendering login page if loggedIn is true. if loggedIn is false then render login page only.