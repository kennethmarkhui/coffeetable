import divider from '../../assets/image/divider.png'

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
        <div className="max-w-full h-[46rem] p-8 shadow-md border-none bg-black flex flex-col mx-auto gap-12 sm:flex-row">
            <div className="basis-1/2 p-4 flex justify-center flex-col">
                <div className="text-yellow0 text-4xl">{title}</div>
                <div className="">{subject}</div>
                <img className="w-72 h-10 flex mx-auto" src={divider}></img>
                <div className="mx-auto p-8">
                    <div className="">{testimonies}</div>
                </div>
            </div>
            <div className="basis-1/2 p-4">
                <img src="http://placekitten.com/1200/650"></img>
            </div>
        </div>
    )
}

export default CustomerExperienceCard
