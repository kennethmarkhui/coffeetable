import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'

const contactUsHeroContent: IHero = {
    subject: "Book Your Table; we Can't Wait To See You!",
}

const contactUsTransparentContent: ITransparentCard = {
    title: "We're Looking Forward to Seeing You!",
    description:
        "Book your table now; trust us, you won't ever forget your experience at Dandy Lane Cafe.",
    button: 'Contact Us',
}

const ContactUs = (): JSX.Element => {
    return (
        <>
            <Hero subject={contactUsHeroContent.subject} />
            <TransparentCard
                title={contactUsTransparentContent.title}
                description={contactUsTransparentContent.description}
                button={contactUsTransparentContent.button}
            />
        </>
    )
}

export default ContactUs
