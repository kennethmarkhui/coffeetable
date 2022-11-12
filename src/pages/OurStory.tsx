import Hero from '../components/sections/Hero'
import Who from '../components/sections/Who'
import Inspiration from '../components/sections/Inspiration'
import Videos from '../components/sections/Videos'
import BackgroundImageCard from '../components/sections/BackgroundImageCard'
import { backgroundImageCard, hero, inspiration } from '../data/our-story'

const OurStory = (): JSX.Element => {
    return (
        <>
            <Hero subject={hero.subject} />
            <Who />
            <Inspiration
                title={inspiration.title}
                description={inspiration.description}
            />
            <Videos />
            <BackgroundImageCard
                title={backgroundImageCard.title}
                description={backgroundImageCard.description}
                button={backgroundImageCard.button}
            />
        </>
    )
}

export default OurStory
