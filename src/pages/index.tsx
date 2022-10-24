import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'

const transparentContent: ITransparentCard = {
    title: 'Book Your Table Now!',
    description: 'Your table is waiting, so book today!',
    button: 'Reserve Your Table',
}

const Home = (): JSX.Element => {
    return (
        <div>
            home page
            <TransparentCard
                title={transparentContent.title}
                description={transparentContent.description}
                button={transparentContent.button}
            />
        </div>
    )
}

export default Home
