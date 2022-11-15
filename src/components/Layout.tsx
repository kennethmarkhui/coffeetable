import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Layout = (): JSX.Element => {
    const { pathname } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
