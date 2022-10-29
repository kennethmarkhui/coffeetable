import divider from '../../assets/image/divider.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

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
        <section className="max-w-full shadow-md border-none bg-black grid auto-rows-fr xl:grid-cols-2">
            <div className="flex flex-col gap-4 p-8">
                <p className="text-yellow0">{title}</p>
                <h1 className="text-2xl md:text-4xl">{subject}</h1>
                <img className="w-72" src={divider} />
                <div className="py-16 xl:py-32">
                    <div className="flex flex-row justify-center gap-4">
                        <FaArrowLeft size={'1em'} />
                        <p className="text-center w-9/12 text-sm md:text-base">
                            {testimonies}
                        </p>
                        <FaArrowRight size={'1em'} />
                    </div>
                </div>
            </div>
            <span className="bg-[url('http://placekitten.com/1200/1200')] bg-cover bg-center" />
        </section>
    )
}

export default CustomerExperienceCard
