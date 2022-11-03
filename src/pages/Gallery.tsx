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
            <img
                src="http://placekitten.com/350/250"
                alt="brand"
                className="mx-auto p-4"
            />
            <div className="flex justify-center">
                <div>
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <img src="http://placekitten.com/250/250" alt="1" />
                        <img src="http://placekitten.com/250/250" alt="2" />
                        <img src="http://placekitten.com/250/250" alt="3" />
                        <img src="http://placekitten.com/250/250" alt="4" />
                        <img src="http://placekitten.com/250/250" alt="5" />
                        <img src="http://placekitten.com/250/250" alt="6" />
                        <img src="http://placekitten.com/250/250" alt="7" />
                        <img src="http://placekitten.com/250/250" alt="8" />
                        <img src="http://placekitten.com/250/250" alt="9" />
                    </div>
                </div>
            </div>

            <TransparentCard
                title={galleryTransparentContent.title}
                description={galleryTransparentContent.description}
                button={galleryTransparentContent.button}
            />
        </>
    )
}

export default Gallery
