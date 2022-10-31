import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'

const galleryHeroContent: IHero = {
    subject: 'See Our Delightful Cafe in Action',
}

const galleryTransparentContent: ITransparentCard = {
    title: "We Bet You'll Want to See our Food in Person!",
    description: 'Book your table now to get the dandiest experience',
    button: 'Contact Us',
}

const Gallery = (): JSX.Element => {
    return (
        <>
            <Hero subject={galleryHeroContent.subject} />
            <TransparentCard
                title={galleryTransparentContent.title}
                description={galleryTransparentContent.description}
                button={galleryTransparentContent.button}
            />
        </>
    )
}

export default Gallery
