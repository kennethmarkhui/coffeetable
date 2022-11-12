import { IBackgroundImageCard } from '../components/sections/BackgroundImageCard'
import { IHero } from '../components/sections/Hero'
import { IImage } from '../components/sections/Images'

export const hero: IHero = {
    subject: 'See Our Delightful Lorem in Action',
}

export const backgroundImageCard: IBackgroundImageCard = {
    title: "We Bet You'll Want to See our Food in Person!",
    description: 'Book your table now to get the loremiest experience',
    button: 'Contact Us',
}

export const images: IImage[] = [
    { id: 1, src: 'http://placekitten.com/250/250' },
    { id: 2, src: 'http://placekitten.com/250/260' },
    { id: 3, src: 'http://placekitten.com/260/250' },
    { id: 4, src: 'http://placekitten.com/270/250' },
    { id: 5, src: 'http://placekitten.com/250/280' },
    { id: 6, src: 'http://placekitten.com/300/250' },
    { id: 7, src: 'http://placekitten.com/250/300' },
    { id: 8, src: 'http://placekitten.com/240/440' },
]
