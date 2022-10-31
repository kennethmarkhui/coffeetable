import divider from '../../assets/image/divider.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export interface IClientExperienceCard {
    title: string
    subject: string
    testimonies: string[]
}

const CustomerExperienceCard = ({
    title,
    subject,
    testimonies,
}: IClientExperienceCard): JSX.Element => {
    return (
        <section className="w-full shadow-md border-none bg-black grid auto-rows-fr xl:grid-cols-2">
            <div className="flex flex-col gap-4 p-8">
                <p className="text-yellow0">{title}</p>
                <h1 className="text-2xl md:text-4xl">{subject}</h1>
                <img className="w-72 place-self-center" src={divider} />
                <Carousel
                    // TODO maybe fix this hacky way to set the width (max-w-[327px] sm:max-w-none)
                    className="max-w-[327px] sm:max-w-none place-self-center"
                    showThumbs={false}
                    showStatus={false}
                >
                    {testimonies.map((testimony, index) => (
                        <p
                            key={index}
                            className="text-sm md:text-base px-7 py-10 xl:py-24"
                        >
                            {testimony}
                        </p>
                    ))}
                </Carousel>
            </div>
            <span className="bg-[url('http://placekitten.com/1200/1200')] bg-cover bg-center" />
        </section>
    )
}

export default CustomerExperienceCard
