"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    console.log({pathname})

    const [input, setInput] = useState("")
    return (
        <>
            <h1> This is Auth Layout</h1>

            <input value={input} type="text" 
            onChange={(e) => setInput(e.target.value)}/>


            <Link className={pathname === "/login" ? "font-bold" : ""} href="/login">Login </Link>
            <Link className={pathname === "/register" ? "font-bold" : ""} href="/register">Register </Link>
            <Link className={pathname === "/forgot-password" ? "font-bold" : ""} href="/forgot-password">Forgot Password </Link>
            {children}
        </>
    )
}
export default AuthLayout

//NESTED LAYOUT
//Since we made another layout in grouping folder Auth,
// this layout is being used in login page, forgot password page and register page
//header and footer ko layout pani huncha. tyo sangai yo AuthLayout pani huncha, yo 3 ta page ma.

//yo layout  ma rakheko link basirahan6. kinavane auth layout ma 6.  
//3 ota login register and forgot password jun page ma gayepani yo 3 ta link persist garirahan6.

//usePathname - is a hook, that we r using in server components. which is not allowed , so we get Failed to compile error.
// top ma "use client" lekhepaxo Client  component huncha. ani yo  error aaudaina

//   <Link className={pathname === "/login" ? "active": ""} href="/login">Login </Link>
//mathi hamile active huda font-bold rakhem. So that we know in which page we are.


//hamile mathi input rakhem, template ma yo input ma lekheko kura arko page ma jada haraucha. bcoz of re-rendering

// 
// Login Register Forgot Password
//layout ko case ma vane input ma lekheko kura arko page ma jada haraudaina kinavane re-rendering hudaina.
// sabin
// Login Register Forgot Password
