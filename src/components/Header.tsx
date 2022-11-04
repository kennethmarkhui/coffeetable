import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { HiMenu } from 'react-icons/hi'

import Button from './Button'
import MenuDrawer from './MenuDrawer'
import Logo from '../assets/logo/Coffee_table.png'

interface Link {
    name: string
    to: string
}

interface ContactNumber {
    name: string
    number: number
}

const navLinks: Link[] = [
    { name: 'Home', to: '/' },
    { name: 'Our Story', to: '/our-story' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact Us', to: '/contact-us' },
]

const contactNumbers: ContactNumber[] = [
    { name: 'Test', number: 123456789 },
    { name: 'Teste', number: 987654321 },
]

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = (): void => {
        setIsOpen(true)
    }

    const closeDrawer = (): void => {
        setIsOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-black">
            <div className="w-full m-auto max-w-7xl flex items-center justify-between py-4 px-6">
                {/* LOGO */}
                <RouterLink to="/">
                    <div className="flex w-20 lg:w-40">
                        <img src={Logo} alt="Logo" />
                    </div>
                </RouterLink>

                {/* NAVLINKS */}
                <HiMenu
                    size="2rem"
                    className="md:hidden order-first cursor-pointer"
                    onClick={openDrawer}
                />
                {/* MOBILE */}
                <MenuDrawer isOpen={isOpen} onClose={closeDrawer}>
                    <nav>
                        <ul className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
                            {navLinks.map((navLink, index) => (
                                <li key={`mobile-${navLink.name}-${index}`}>
                                    <RouterLink
                                        to={navLink.to}
                                        className="group"
                                        onClick={closeDrawer}
                                    >
                                        {navLink.name}
                                    </RouterLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </MenuDrawer>
                {/* DESKTOP */}
                <nav className="hidden md:block">
                    <ul className="flex flex-wrap gap-4">
                        {navLinks.map((navLink, index) => (
                            <li key={`${navLink.name}-${index}`}>
                                <RouterLink to={navLink.to} className="group">
                                    {navLink.name}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white" />
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CONTACT */}
                <HiDevicePhoneMobile
                    className="md:hidden text-yellow0"
                    size="2rem"
                />
                <div className="hidden md:flex md:flex-col gap-2">
                    {contactNumbers.map((contactNumber, index) => (
                        <Button
                            key={index}
                        >{`${contactNumber.name}: ${contactNumber.number}`}</Button>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
