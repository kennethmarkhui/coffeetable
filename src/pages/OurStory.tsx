import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'

const ourStoryHeroContent: IHero = {
    subject: 'Find Out More about Your Local Cafe Owners',
}

const ourStoryTransparentContent: ITransparentCard = {
    title: 'Have a Dandy Start to Your Day!',
    description:
        'Book your table now, and your tastes buds will be thanking you!',
    button: 'Contact Us',
}

const OurStory = (): JSX.Element => {
    return (
        <>
            <Hero subject={ourStoryHeroContent.subject} />
            <TransparentCard
                title={ourStoryTransparentContent.title}
                description={ourStoryTransparentContent.description}
                button={ourStoryTransparentContent.button}
            />
        </>
    )
}

export default OurStory
