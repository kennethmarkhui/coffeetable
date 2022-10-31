import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import FormContainer, {
    IFormContainer,
} from '../components/cards/FormContainer'
import ClientExperienceCard, {
    IClientExperienceCard,
} from '../components/cards/ClientExperienceCard'
import WhereAreWe from '../components/WhereAreWe'
import InfosCard from '../components/InfosCard'
import OurMission from '../components/OurMission'

const homeHeroContent: IHero = {
    title: 'dandy day, dandy start',
    subject: 'Artisan Coffee & Fine Food in Tasmania',
    description:
        'If you live in Hobart or Moonah, we have two quaint locations in the heart of Tasmania. We offer a beautiful range of drinks and food for all pallets, and we cater to any dietary requirements.',
    buttonText: 'Book a Table Today!',
}

const homeTransparentContent: ITransparentCard = {
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
    testimonies: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aperiam maiores cum quos atque nemo sequi tempore laboriosam ab quas nostrum quo, sed delectus aliquid.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae error, incidunt similique aliquam maiores amet nam.',
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur sapiente qui sed ab quasi quo temporibus tempore? Doloremque tempora facilis, porro aut asperiores nobis vero at, ea qui eos impedit similique adipisci voluptas nulla fugit deleniti. Deleniti, tempora iure. Ullam, placeat similique.',
    ],
}

const Home = (): JSX.Element => {
    return (
        <>
            <Hero
                title={homeHeroContent.title}
                subject={homeHeroContent.subject}
                description={homeHeroContent.description}
                buttonText={homeHeroContent.buttonText}
            />
            <InfosCard />
            <OurMission />
            <WhereAreWe />
            <ClientExperienceCard
                title={ClientExperienceContent.title}
                subject={ClientExperienceContent.subject}
                testimonies={ClientExperienceContent.testimonies}
            />

            <FormContainer
                title={FormContainerContent.title}
                subject={FormContainerContent.subject}
                description={FormContainerContent.description}
            />
            <TransparentCard
                title={homeTransparentContent.title}
                description={homeTransparentContent.description}
                button={homeTransparentContent.button}
            />
        </>
    )
}

export default Home
