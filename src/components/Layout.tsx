import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import TransparentCard from './cards/TransparentCard'

const Layout = (): JSX.Element => {
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
