import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    return <main>{children}</main>
}

export default Layout
