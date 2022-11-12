import Hero from '../components/sections/Hero'
import Images from '../components/sections/Images'
import BackgroundImageCard from '../components/sections/BackgroundImageCard'
import { backgroundImageCard, hero } from '../data/gallery'

const Gallery = (): JSX.Element => {
    return (
        <>
            <Hero subject={hero.subject} />
            <Images />
            <BackgroundImageCard
                title={backgroundImageCard.title}
                description={backgroundImageCard.description}
                button={backgroundImageCard.button}
            />
        </>
    )
}

export default Gallery
