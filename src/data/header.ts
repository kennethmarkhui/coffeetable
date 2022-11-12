interface Link {
    name: string
    to: string
}

interface ContactNumber {
    name: string
    number: number
}

export const navLinks: Link[] = [
    { name: 'Home', to: '/' },
    { name: 'Our Story', to: '/our-story' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact Us', to: '/contact-us' },
]

export const contactNumbers: ContactNumber[] = [
    { name: 'Test', number: 123456789 },
    { name: 'Teste', number: 987654321 },
]
