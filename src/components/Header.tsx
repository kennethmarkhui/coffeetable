import { Link as RouterLink } from 'react-router-dom'
import  Logo  from '../assets/Logo/Coffee_table.png';

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
    return (
        <header className=" top-0 left-0 right-0 bg-black text-white">
            <div className="w-full m-auto max-w-7xl flex items-center justify-between py-4 px-6">
                <div>
                    <RouterLink to="/">logo1
                    <div className = "flex w-40 h-40">
                      <img src={Logo} alt ="Logo" />
                    </div>
                      
                    </RouterLink>
                </div>
                <nav>
                    <ul className="flex flex-wrap gap-4">
                        {navLinks.map((navLink, index) => (
                            <li key={`${navLink.name}-${index}`}>
                                <RouterLink to={navLink.to} className="group">
                                    {navLink.name}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col gap-2">
                    {contactNumbers.map((contactNumber, index) => (
                        <div
                            key={index}
                            className="py-2 px-4 border-4 border-[#ab936b]"
                        >
                            {`${contactNumber.name}: ${contactNumber.number}`}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
