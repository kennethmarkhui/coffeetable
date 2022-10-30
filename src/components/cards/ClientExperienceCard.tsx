import divider from '../../assets/image/divider.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const yes = 'yes'
export interface IClientExperienceCard {
    title: string
    subject: string
    testimonies: string
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
                <img className="w-72 mx-auto pt-20 " src={divider} />

                <div className="py-16 xl:py-32 flex justify-center">
                    <div className="flex flex-row justify-center gap-4">
                        <Carousel className="">
                            <div className="mx-auto flex">
                                <p className="p-24">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Itaque, aperiam maiores
                                    cum quos atque nemo sequi tempore laboriosam
                                    ab quas nostrum quo, sed delectus aliquid.
                                </p>
                            </div>
                            <div>
                                <p className="p-24">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti vitae error,
                                    incidunt similique aliquam maiores amet nam.
                                    2
                                </p>
                            </div>
                            <div>
                                <p className="p-24">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Ea consequatur sapiente
                                    qui sed ab quasi quo temporibus tempore?
                                    Doloremque tempora facilis, porro aut
                                    asperiores nobis vero at, ea qui eos impedit
                                    similique adipisci voluptas nulla fugit
                                    deleniti. Deleniti, tempora iure. Ullam,
                                    placeat similique.
                                </p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <span className="bg-[url('http://placekitten.com/1200/1200')] bg-cover bg-center" />
            <link
                rel="stylesheet"
                href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
            />
        </section>
    )
}

export default CustomerExperienceCard
