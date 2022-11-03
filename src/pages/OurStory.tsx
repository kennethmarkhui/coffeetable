import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import divider from '../assets/image/divider.png'
import Button from '../components/Button'

const ourStoryHeroContent: IHero = {
    subject: 'Find Out More about Your Local Cafe Owners',
}

const ourStoryTransparentContent: ITransparentCard = {
    title: 'The top of the morning to you!',
    description:
        'Book your table now, and your tastes buds will be thanking you!',
    button: 'Contact Us',
}

const src = 'https://www.youtube.com/embed/lWLxD7BzZ_Y'

const OurStory = (): JSX.Element => {
    return (
        <>
            <Hero subject={ourStoryHeroContent.subject} />
            <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 p-8">
                <img
                    src="http://placekitten.com/550/550"
                    alt=""
                    className="flex-1"
                />
                <div className="flex-1 flex flex-col lg:flex-row gap-8">
                    <div className="space-y-4">
                        <h1 className="text-2xl">WHO ARE COFFEE TABLE</h1>
                        <img className="w-72" src={divider} />
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod atque possimus aspernatur amet, earum
                            labore commodi beatae itaque ipsum fugit velit
                            impedit sed, consectetur mollitia tenetur aliquam ex
                            quia reiciendis autem sunt dolores odit numquam
                            nostrum nisi. Sunt ullam aperiam eveniet temporibus
                            nemo, minus suscipit doloremque officiis impedit ea
                            dolore.
                        </p>
                        <Button>Book now</Button>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde asperiores laborum doloremque perferendis
                            eos excepturi ratione ea dolore distinctio,
                            consectetur doloribus quisquam ducimus sequi illo,
                            ipsum temporibus dicta! Voluptates, accusamus vitae
                            possimus voluptatum aliquid iste id odit error et
                            fugit!
                        </p>
                        <img
                            src="http://placekitten.com/550/550"
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            </section>
            <section className="bg-black max-w-screen-xl mx-auto p-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 lg:order-last">
                        <img
                            src="http://placekitten.com/550/550"
                            alt=""
                            className="m-auto"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-2xl md:text-4xl">
                            Our Inspiration
                        </h1>
                        <img className="w-72" src={divider} />
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Labore neque sequi ab dignissimos adipisci
                            quidem libero! Accusamus esse voluptate obcaecati
                            repellendus beatae mollitia possimus numquam autem
                            nobis? Iusto nihil, debitis nobis obcaecati eius
                            quisquam, iure facilis omnis voluptatum est officia
                            quis iste tempore ab sequi, accusantium eos cumque
                            quod illo. Vitae totam quaerat eos ipsa quae quia
                            ratione beatae laudantium!
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col sm:flex-row max-w-screen-xl mx-auto gap-8 p-8">
                <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/lWLxD7BzZ_Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/n-ozFN8tGKM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
            <TransparentCard
                title={ourStoryTransparentContent.title}
                description={ourStoryTransparentContent.description}
                button={ourStoryTransparentContent.button}
            />
        </>
    )
}

export default OurStory
