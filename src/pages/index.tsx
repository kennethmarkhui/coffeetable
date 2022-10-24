import CTA from '../components/CTA'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import FormContainer from '../components/cards/FormContainer'

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
            <FormContainer />
            <TransparentCard
                title={transparentContent.title}
                description={transparentContent.description}
                button={transparentContent.button}
            />
        </>
    )
}

export default Home
