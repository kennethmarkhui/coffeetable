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
            <section className="max-w-7xl mx-auto p-8 space-y-8">
                <img
                    src="http://placekitten.com/350/250"
                    alt="brand"
                    className="mx-auto"
                />
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <img src="http://placekitten.com/250/250" alt="1" />
                        <img src="http://placekitten.com/250/250" alt="2" />
                        <img src="http://placekitten.com/250/250" alt="3" />
                        <img src="http://placekitten.com/250/250" alt="4" />
                        <img src="http://placekitten.com/250/250" alt="5" />
                        <img src="http://placekitten.com/250/250" alt="6" />
                        <img src="http://placekitten.com/250/250" alt="7" />
                        <img src="http://placekitten.com/250/250" alt="8" />
                    </div>
                </div>
            </section>

            <TransparentCard
                title={galleryTransparentContent.title}
                description={galleryTransparentContent.description}
                button={galleryTransparentContent.button}
            />
        </>
    )
}

export default Gallery
