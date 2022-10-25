import CTA from '../components/CTA'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import FormContainer, {
    IFormContainer,
} from '../components/cards/FormContainer'
import ClientExperienceCard, {
    IClientExperienceCard,
} from '../components/cards/ClientExperienceCard'

const transparentContent: ITransparentCard = {
    title: 'Book Your Table Now!',
    description: 'Your table is waiting, so book today!',
    button: 'Reserve Your Table',
}

const FormContainerContent: IFormContainer = {
    title: 'We are just a phone call away',
    subject: 'Book your table today',
    description:
        'We are located in Hobart and Moonah, and you can book a table at one of our delightful cafes via email or our contact form. We would love to hear from you and provide you with the best start, break, or end of your day. Grab a quick coffee or enjoy the pleasures of our extensive menu today!',
}

const ClientExperienceContent: IClientExperienceCard = {
    title: 'testimonials',
    subject: "Client's Experience",
    testimonies: 'sarap sarap naman ng food',
}

const Home = (): JSX.Element => {
    return (
        <>
            <CTA />
            <ClientExperienceCard
                title={ClientExperienceContent.title}
                subject={ClientExperienceContent.subject}
                testimonies={ClientExperienceContent.testimonies}
            />
            home page
            <FormContainer
                title={FormContainerContent.title}
                subject={FormContainerContent.subject}
                description={FormContainerContent.description}
            />
            <TransparentCard
                title={transparentContent.title}
                description={transparentContent.description}
                button={transparentContent.button}
            />
        </>
    )
}

export default Home
