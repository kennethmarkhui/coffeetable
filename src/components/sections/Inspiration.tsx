import divider from '../../assets/image/divider.png'

export interface IInspiration {
    title: string
    description: string
}

const Inspiration = ({ title, description }: IInspiration): JSX.Element => {
    return (
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
                    <h1 className="text-2xl md:text-4xl">{title}</h1>
                    <img className="w-72" src={divider} />
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default Inspiration
