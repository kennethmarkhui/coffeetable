import Button from '../Button'
import divider from '../../assets/image/divider.png'

export interface IHero {
    title?: string
    subject: string
    description?: string
    buttonText?: string
}

const Hero = ({
    title = '',
    subject,
    description = '',
    buttonText = '',
}: IHero): JSX.Element => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center lg:flex-row gap-2 px-4">
            <div className="flex flex-col items-center text-center gap-2 lg:flex-1 px-8">
                {title !== '' && (
                    <h2 className="text-yellow0 font-bold md:text-2xl">
                        {title}
                    </h2>
                )}
                <h1 className="text-2xl md:text-4xl">{subject}</h1>
                <img className="w-72" src={divider} />
                {/* <hr className="border-yellow0 w-48" /> */}
                {description !== '' && (
                    <p className="text-sm md:text-base">{description}</p>
                )}
                {buttonText !== '' && (
                    <Button className="my-4" variant="fill">
                        {buttonText}
                    </Button>
                )}
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden">
                <img src="http://placekitten.com/150/150" alt="" />
                <img src="http://placekitten.com/150/150" alt="" />
            </div>

            {/* LARGE SCREEN */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:order-first h-full">
                <div>
                    <img src="http://placekitten.com/500/500" alt="" />
                </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 h-full">
                <div>
                    <img src="http://placekitten.com/500/500" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
