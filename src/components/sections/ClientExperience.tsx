import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import divider from '../../assets/image/divider.png'

export interface IClientExperience {
    title: string
    subject: string
    testimonies: string[]
}

const ClientExperience = ({
    title,
    subject,
    testimonies,
}: IClientExperience): JSX.Element => {
    return (
        <section className="w-full shadow-md border-none bg-black flex flex-col xl:flex-row">
            <div className="flex flex-col gap-4 p-8 flex-1">
                <p className="text-yellow0">{title}</p>
                <h1 className="text-2xl md:text-4xl">{subject}</h1>
                <img className="w-72 place-self-center" src={divider} />
                <Carousel
                    className="w-full place-self-center"
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
            <span className="bg-[url('http://placekitten.com/1200/1200')] bg-cover bg-center flex-1 min-h-[300px]" />
        </section>
    )
}

export default ClientExperience
