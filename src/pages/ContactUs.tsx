import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import FormCard from '../components/cards/FormCard'
import Button from '../components/Button'
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
            <div className=" bg-black p-8 max-w-7xl shadow-md border-none mx-auto gap-10 lg:flex-row my-16">
                <div className="flex flex-row">
                    <div className="basis-1/2 pr-6">
                        <FormCard placeholder="First Name" />
                        <FormCard placeholder="Email" />
                    </div>
                    <div className="basis-1/2">
                        <FormCard placeholder="Last Name" />
                        <FormCard placeholder="Phone" />
                    </div>
                </div>

                <div className="space-y-4 pb-8">
                    <FormCard placeholder="Message" />
                </div>
                <Button>{'Submit'}</Button>
            </div>

            <TransparentCard
                title={contactUsTransparentContent.title}
                description={contactUsTransparentContent.description}
                button={contactUsTransparentContent.button}
            />
        </>
    )
}

export default ContactUs
