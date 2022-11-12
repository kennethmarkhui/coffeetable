import Hero from '../components/sections/Hero'
import Infos from '../components/sections/Infos'
import WhoWeAre from '../components/sections/WhoWeAre'
import WhereAreWe from '../components/sections/WhereAreWe'
import ClientExperience from '../components/sections/ClientExperience'
import FormContainer from '../components/sections/FormContainer'
import BackgroundImageCard from '../components/sections/BackgroundImageCard'
import {
    clientExperience,
    hero,
    backgroundImageCard,
    formContainer,
} from '../data/home'

const Home = (): JSX.Element => {
    return (
        <>
            <Hero
                title={hero.title}
                subject={hero.subject}
                description={hero.description}
                buttonText={hero.buttonText}
            />
            <Infos />
            <WhoWeAre />
            <WhereAreWe />
            <ClientExperience
                title={clientExperience.title}
                subject={clientExperience.subject}
                testimonies={clientExperience.testimonies}
            />
            <FormContainer
                title={formContainer.title}
                subject={formContainer.subject}
                description={formContainer.description}
            />
            <BackgroundImageCard
                title={backgroundImageCard.title}
                description={backgroundImageCard.description}
                button={backgroundImageCard.button}
            />
        </>
    )
}

export default Home
