import Hero from '../components/sections/Hero'
import BusinessCard from '../components/sections/BusinessCard'
import Form from '../components/Form'
import BackgroundImageCard from '../components/sections/BackgroundImageCard'
import { backgroundImageCard, hero } from '../data/contact-us'

const ContactUs = (): JSX.Element => {
    return (
        <>
            <Hero subject={hero.subject} />
            <BusinessCard />

            <section className="bg-black p-8 max-w-7xl shadow-md border-none mx-auto gap-10 lg:flex-row my-16">
                <Form />
            </section>

            <BackgroundImageCard
                title={backgroundImageCard.title}
                description={backgroundImageCard.description}
                button={backgroundImageCard.button}
            />
        </>
    )
}

export default ContactUs
