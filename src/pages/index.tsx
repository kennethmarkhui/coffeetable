import CTA from '../components/CTA'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import FormCard, { IFormCard } from '../components/cards/FormCard'
import BlankContainer from '../components/cards/BlankContainer'

const transparentContent: ITransparentCard = {
    title: 'Book Your Table Now!',
    description: 'Your table is waiting, so book today!',
    button: 'Reserve Your Table',
}

const Home = (): JSX.Element => {
    return (
        <>
            <CTA />
            home page
            {/*
                <FormCard placeholder="First Name" />
                <FormCard placeholder="Last Name" />
            */}
            <BlankContainer />
            <TransparentCard
                title={transparentContent.title}
                description={transparentContent.description}
                button={transparentContent.button}
            />
        </>
    )
}

export default Home
